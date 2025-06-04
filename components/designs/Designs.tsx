import React, { useEffect, useState } from "react";
import { PexelsPhoto } from "../../types/pexels";
import { getPexelsPhotos } from "../../services/pexels";
import Image from "next/image";
import Masonry from "react-masonry-css";

function Designs() {
  const [photos, setPhotos] = useState<PexelsPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const data = await getPexelsPhotos();
        setPhotos(data);
      } catch (err) {
        setError("Failed to load photos");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-fun-pink"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 min-h-[400px] flex items-center justify-center">
        {error}
      </div>
    );
  }

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {photos.map((photo) => (
        <div key={photo.id}>
          <a href={photo.url} target="_blank" rel="noopener noreferrer">
            <Image
              src={photo.src.large2x}
              alt={photo.alt || "Photography by Cem Nisan"}
              width={photo.width}
              height={photo.height}
              className="rounded-lg object-cover hover:opacity-75 transition-opacity w-full h-auto"
              priority
            />
          </a>
        </div>
      ))}
    </Masonry>
  );
}

export default Designs;
