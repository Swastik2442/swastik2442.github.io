import { createApi } from 'unsplash-js';
import type { Orientation } from 'unsplash-js';
import { unsplashAppName, unsplashAccessKey } from "@/config";

function getUnsplashParamURL(url: string) {
  if (!unsplashAppName) return url;
  const unsplashURL = new URL(url);
  unsplashURL.searchParams.set("utm_source", unsplashAppName);
  unsplashURL.searchParams.set("utm_medium", "referral");
  return unsplashURL.href;
}

export async function getUnsplashImage(orientation: Orientation) {
  if (!unsplashAccessKey) {
    console.error("Unsplash Access Key not found");
    return null;
  }

  const unsplash = createApi({ accessKey: unsplashAccessKey });
  const response = await unsplash.photos.getRandom({
    count: 1,
    orientation: orientation,
    topicIds: ["6sMVjTLSkeQ", "bo8jQKTaE0Y"], // Nature, Wallpaper
    contentFilter: "high",
  });
  if (response.type === 'error')
    return null;

  const photo = Array.isArray(response.response) ? response.response[0] : response.response;
  return {
    url: getUnsplashParamURL(photo.urls.raw),
    blur_hash: photo.blur_hash,
    name_author: photo.user.name,
    name_service: "Unsplash",
    attr_author: getUnsplashParamURL(photo.user.links.html),
    attr_service: getUnsplashParamURL("https://unsplash.com"),
  } satisfies QImg;
}
