"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type PhotoItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

type PhotoYear = {
  year: string;
  title: string;
  description: string;
  coverImage: string;
  photos: PhotoItem[];
};

const SearchIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M11 19a8 8 0 1 1 5.29-14A8 8 0 0 1 11 19Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20 20l-4.35-4.35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

const PhotoGalleryPage = () => {
  const [data, setData] = useState<PhotoYear[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        const response = await fetch("/gallery-data/photo-gallery.json");
        const json = (await response.json()) as PhotoYear[];

        if (isMounted) {
          setData(json);
        }
      } catch (error) {
        console.error("Failed to load photo gallery data", error);
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

  const totalPhotos = useMemo(() => {
    return data.reduce((total, item) => total + item.photos.length, 0);
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
                Image Gallery
              </p>

              <h1 className="mt-2 text-3xl font-black text-black sm:text-4xl">
                Photo Gallery
              </h1>

              <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-gray-600 sm:text-base">
                Select a year card. The next page will show only that selected
                year&apos;s image cards.
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
                  {totalPhotos}
                </p>
                <p className="text-xs font-bold text-gray-600">Photos</p>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="rounded-2xl bg-white p-8 text-center text-sm font-bold text-gray-600 shadow-sm">
            Loading photo gallery...
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {data.map((item) => (
              <Link
                key={item.year}
                href={`/gallery/photo/${item.year}`}
                className="group overflow-hidden rounded-2xl bg-white text-left shadow-md ring-1 ring-secondary transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:ring-primary/40"
              >
                <div className="relative h-[230px] w-full overflow-hidden bg-secondary">
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-primary/0 opacity-0 transition-all duration-300 group-hover:bg-primary/30 group-hover:opacity-100">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-lg">
                      <SearchIcon />
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

                  <div className="mt-4 flex flex-wrap gap-2">
                  
                   
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default PhotoGalleryPage;
