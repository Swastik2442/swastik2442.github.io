import { getUnsplashImage } from "@/utils/images";

export const dynamic = 'force-static';
export const revalidate = 604800; // 1 week

export async function GET() {
    const response = await getUnsplashImage("landscape");
    return Response.json(response);
}
