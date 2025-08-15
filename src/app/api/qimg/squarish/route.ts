import { getUnsplashImage } from "@/services/unsplash";

export const dynamic = 'force-static';
export const revalidate = 604800; // 1 week

export async function GET() {
    const response = await getUnsplashImage("squarish");
    return Response.json(response);
}
