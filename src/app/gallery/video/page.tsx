"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type VideoItem = {
  id: string;
  title: string;
  description: string;
  videoId: string;
  thumbnail: string;
  watchUrl: string;
  embedUrl: string;
};

type VideoYear = {
  year: string;
  title: string;
  description: string;
  coverThumbnail: string;
  videos: VideoItem[];
};

const VideoGalleryPage = () => {
  const [data, setData] = useState<VideoYear[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        const response = await fetch("/gallery-data/video-gallery.json");
        const json = (await response.json()) as VideoYear[];

        if (isMounted) {
          setData(json);
        }
      } catch (error) {
        console.error("Failed to load video gallery data", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  const totalVideos = useMemo(() => {
    return data.reduce((total, item) => total + item.videos.length, 0);
  }, [data]);

  return (
    <main className="min-h-screen bg-background px-3 py-8 sm:px-4 sm:py-10">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-7">
          <Link
            href="/gallery"
            className="inline-flex rounded-lg bg-primary px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-lg"
          >
            ← Back to Gallery
          </Link>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Video Gallery
              </p>

              <h1 className="mt-2 text-3xl font-black text-black sm:text-4xl">
                Video Gallery
              </h1>

              <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-gray-600 sm:text-base">
                Select a year card. The next page will show only that selected
                year&apos;s video cards.
              </p>

              <div className="mt-4 h-[3px] w-24 rounded-full bg-primary" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-secondary px-5 py-4 text-center">
                <p className="text-2xl font-black text-primary">
                  {data.length}
                </p>
                <p className="text-xs font-bold text-gray-600">Years</p>
              </div>

              <div className="rounded-xl bg-secondary px-5 py-4 text-center">
                <p className="text-2xl font-black text-primary">
                  {totalVideos}
                </p>
                <p className="text-xs font-bold text-gray-600">Videos</p>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="rounded-2xl bg-white p-8 text-center text-sm font-bold text-gray-600 shadow-sm">
            Loading video gallery...
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {data.map((item) => (
              <Link
                key={item.year}
                href={`/gallery/video/${item.year}`}
                className="group overflow-hidden rounded-2xl bg-white text-left shadow-md ring-1 ring-secondary transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:ring-primary/40"
              >
                <div className="relative h-[230px] w-full overflow-hidden bg-secondary">
                  <Image
                    src={item.coverThumbnail}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/35 transition-all duration-300 group-hover:bg-primary/35">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-black text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                      ▶
                    </span>
                  </div>

                
                </div>

                <div className="p-4">
                  <h2 className="text-lg font-black text-black transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>

               
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default VideoGalleryPage;
