import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { NextResponse } from "next/server";
import { getClientIp, Request } from "request-ip";
import { kvAPIToken, kvAPIURL } from "@/config";

const ratelimit = new Ratelimit({
  redis: new Redis({
    url: kvAPIURL,
    token: kvAPIToken,
  }),
  limiter: Ratelimit.slidingWindow(10, "60 s"),
});

export const config = { matcher: "/api/:path*" };

export default async function middleware(request: Request) {
  const ip = getClientIp(request) ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);
  return success
    ? NextResponse.next()
    : NextResponse.error();
}
