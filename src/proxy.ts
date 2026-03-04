import { NextResponse, NextRequest } from "next/server"
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { getClientIp, Request } from "request-ip";
import { kvAPIToken, kvAPIURL, links } from "@/config";

const ratelimit = new Ratelimit({
  redis: new Redis({
    url: kvAPIURL,
    token: kvAPIToken,
  }),
  limiter: Ratelimit.slidingWindow(10, "60 s"),
});

export const config = { matcher: ["/api/:path*", "/links/:path*"] };

export default async function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api')) {
    const ip = getClientIp(request as unknown as Request) ?? "127.0.0.1";
    let success = false;
    try {
      const { success: shouldNotRatelimit } = await ratelimit.limit(ip);
      success = shouldNotRatelimit;
    } catch (err) {
      console.error("An error occurred while rate-limiting the request: ", err);
      success = true; // BUG: Directly allowing the request is neither safe nor recommended
    }
    return success ? NextResponse.next() : NextResponse.error();
  }

  if (request.nextUrl.pathname.startsWith('/links')) {
    const link = request.nextUrl.pathname.split("/")[2];
    if (link in links)
      return NextResponse.redirect(new URL(links[link as keyof typeof links]!));
    return NextResponse.error();
  }

  return NextResponse.next();
}
