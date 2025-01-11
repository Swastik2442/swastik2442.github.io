import { createApi } from 'unsplash-js';
import type { Orientation } from 'unsplash-js';
import type { NextRequest } from 'next/server';
import { unsplashAppName, unsplashAccessKey } from "@/config";

export async function GET(request: NextRequest) {
  if (!unsplashAccessKey) {
    console.error("Unsplash Access Key not found");
    return Response.error();
  }

  const orientation = (
    request.nextUrl.searchParams.get('orientation') ?? 'squarish'
  ) as Orientation;

  const unsplash = createApi({ accessKey: unsplashAccessKey });
  const response = await unsplash.photos.getRandom({
    count: 1,
    orientation: orientation,
    topicIds: ["6sMVjTLSkeQ", "bo8jQKTaE0Y"], // Nature, Wallpaper
    contentFilter: "high",
  });
  if (response.type === 'error')
    return Response.error();

  const photo = Array.isArray(response.response) ? response.response[0] : response.response;

  const rawURL = new URL(photo.urls.raw);
  rawURL.searchParams.set("utm_source", unsplashAppName);
  rawURL.searchParams.set("utm_medium", "referral");

  const authorAttr = new URL(photo.user.links.html);
  authorAttr.searchParams.set("utm_source", unsplashAppName);
  authorAttr.searchParams.set("utm_medium", "referral");

  return Response.json({
    url: rawURL.href,
    blur_hash: photo.blur_hash,
    name_author: photo.user.name,
    name_service: "Unsplash",
    attr_author: authorAttr.href,
    attr_service: `https://unsplash.com/?utm_source=${unsplashAppName}&utm_medium=referral`,
  } satisfies QImg);
}
