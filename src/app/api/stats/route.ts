import { wakatimeUsername } from "@/config";

export const revalidate = 1296000; // 15 days

export async function GET() {
  const response = await fetch(
    `https://wakatime.com/api/v1/users/${wakatimeUsername}/stats?is_including_today=true`
  );
  const responseJson = await response.json();
  let languages: WakatimeType[] = [];
  if (responseJson.data)
    languages = responseJson.data.languages.filter((lang : WakatimeType) => (lang.hours >= 3));

  return Response.json({ languages });
}
