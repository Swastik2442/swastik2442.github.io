import { wakatimeUsername } from "@/config";

export const revalidate = 604800; // 1 week

export async function GET() {
  let response = await fetch(
    `https://wakatime.com/api/v1/users/${wakatimeUsername}/stats?is_including_today=true`
  );
  let responseJson = await response.json();
  let languages: WakatimeType[] = [];
  if (responseJson.data)
    languages = responseJson.data.languages.filter((lang : WakatimeType) => (lang.hours >= 3));

  return Response.json({ languages });
}
