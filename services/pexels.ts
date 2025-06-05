import { PexelsPhoto } from "../types/pexels";

export async function getPexelsPhotos(): Promise<PexelsPhoto[]> {
  try {
    console.log("H,", process.env.NEXT_PUBLIC_PEXELS_COLLECTION_ID);
    const response = await fetch(
      `https://api.pexels.com/v1/collections/${
        process.env.PEXELS_COLLECTION_ID ?? "cpvoriu"
      }?per_page=80&sort=asc&type=photos`,
      {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY || "",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch photos from Pexels");
    }

    const data = await response.json();
    return data.media || [];
  } catch (error) {
    console.error("Error fetching Pexels photos:", error);
    return [];
  }
}
