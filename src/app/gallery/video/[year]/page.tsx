"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
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

const CloseIcon = () => {
  return <span className="text-xl font-black leading-none">×</span>;
};

const VideoYearPage = () => {
  const params = useParams<{ year: string }>();
  const year = String(params.year ?? "");

  const [data, setData] = useState<VideoYear[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

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

  const selectedYear = useMemo(() => {
    return data.find((item) => item.year === year) ?? null;
  }, [data, year]);

  const videos = selectedYear?.videos ?? [];

  const closeVideo = () => {
    setActiveVideo(null);
  };

  useEffect(() => {
    if (!activeVideo) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeVideo();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  if (loading) {
    return (
      <main className="min-h-screen bg-background px-4 py-10">
        <section className="mx-auto max-w-7xl rounded-2xl bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-bold text-gray-600">Loading videos...</p>
        </section>
      </main>
    );
  }

  if (!selectedYear) {
    return (
      <main className="min-h-screen bg-background px-4 py-10">
        <section className="mx-auto max-w-[900px] rounded-2xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-3xl font-black text-black">Video Gallery Not Found</h1>
          <p className="mt-3 text-gray-600">This year video gallery does not exist.</p>

          <Link
            href="/gallery/video"
            className="mt-6 inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-primary/90"
          >
            Back to Video Gallery
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-3 py-8 sm:px-4 sm:py-10">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-7">
          <Link
            href="/gallery/video"
            className="inline-flex rounded-lg bg-primary px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-lg"
          >
            ← Back to Year Cards
          </Link>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Dynamic Video Gallery
              </p>

              <h1 className="mt-2 text-3xl font-black text-black sm:text-4xl">
                {selectedYear.title}
              </h1>

              <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-gray-600 sm:text-base">
                {selectedYear.description}
              </p>

              <div className="mt-4 h-[3px] w-24 rounded-full bg-primary" />
            </div>

            <div className="rounded-xl bg-secondary px-5 py-4 text-center">
              <p className="text-2xl font-black text-primary">{videos.length}</p>
              <p className="text-xs font-bold text-gray-600">Videos</p>
            </div>
          </div>
        </div>

        <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 sm:p-6">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Videos
            </p>

            <h2 className="mt-2 text-2xl font-black text-black">
              {year} Video Gallery
            </h2>

            <p className="mt-2 text-sm font-medium text-gray-600">
              Click any video to open it in a modal. Press Esc to close.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {videos.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveVideo(item)}
                className="group overflow-hidden rounded-2xl bg-white text-left shadow-md ring-1 ring-secondary transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:ring-primary/40"
              >
                <div className="relative h-[230px] w-full overflow-hidden bg-secondary">
                  <Image
                    src={item.thumbnail}
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
                  <h3 className="text-base font-black text-black transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>
      </section>

      {activeVideo && (
        <section className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 px-3 py-10">
          <button
            type="button"
            onClick={closeVideo}
            className="absolute inset-0 cursor-default"
            aria-label="Close video background"
          />

          <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-secondary p-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                  Video Preview
                </p>
                <h3 className="mt-1 text-lg font-black text-black">
                  {activeVideo.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeVideo}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 hover:scale-110 hover:bg-primary/90"
                aria-label="Close video"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="aspect-video w-full bg-black">
              <iframe
                src={activeVideo.embedUrl}
                title={activeVideo.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-gray-600">
                {activeVideo.description}
              </p>

              <a
                href={activeVideo.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 rounded-lg bg-primary px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-primary/90"
              >
                Open YouTube
              </a>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default VideoYearPage;
