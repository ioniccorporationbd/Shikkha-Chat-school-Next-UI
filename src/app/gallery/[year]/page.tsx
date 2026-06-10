"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type WheelEvent,
} from "react";
import {
  galleryYears,
  getPhotosByYear,
  getVideosByYear,
  isValidGalleryYear,
} from "../galleryData";

type Position = {
  x: number;
  y: number;
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

const PlusIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
};

const MinusIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M5 12h14"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
};

const CloseIcon = () => {
  return <span className="text-xl font-black leading-none">×</span>;
};

const ResetIcon = () => {
  return <span className="text-xs font-black leading-none">1x</span>;
};

const GalleryYearPage = () => {
  const params = useParams<{ year: string }>();
  const year = params.year;

  const dragRef = useRef({
    active: false,
    startX: 0,
    startY: 0,
    baseX: 0,
    baseY: 0,
  });

  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const selectedYearInfo = useMemo(() => {
    return galleryYears.find((item) => item.year === year) ?? null;
  }, [year]);

  const photos = useMemo(() => {
    return getPhotosByYear(year);
  }, [year]);

  const videos = useMemo(() => {
    return getVideosByYear(year);
  }, [year]);

  const activePhoto =
    activePhotoIndex !== null ? photos[activePhotoIndex] ?? null : null;

  const resetView = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const openPhoto = (index: number) => {
    setActivePhotoIndex(index);
    resetView();
  };

  const closePhoto = () => {
    setActivePhotoIndex(null);
    resetView();
  };

  const zoomTo = (nextZoom: number) => {
    const finalZoom = Math.min(Math.max(nextZoom, 1), 4);

    setZoom(finalZoom);

    if (finalZoom <= 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const zoomIn = () => {
    zoomTo(zoom + 0.25);
  };

  const zoomOut = () => {
    zoomTo(zoom - 0.25);
  };

  const showPreviousPhoto = () => {
    if (activePhotoIndex === null || activePhotoIndex <= 0) return;

    setActivePhotoIndex(activePhotoIndex - 1);
    resetView();
  };

  const showNextPhoto = () => {
    if (activePhotoIndex === null || activePhotoIndex >= photos.length - 1) {
      return;
    }

    setActivePhotoIndex(activePhotoIndex + 1);
    resetView();
  };

  const handleWheelZoom = (event: WheelEvent<HTMLElement>) => {
    event.preventDefault();

    if (event.deltaY < 0) {
      zoomTo(zoom + 0.18);
    } else {
      zoomTo(zoom - 0.18);
    }
  };

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (zoom <= 1) return;

    dragRef.current = {
      active: true,
      startX: event.clientX,
      startY: event.clientY,
      baseX: position.x,
      baseY: position.y,
    };
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;

    const nextX =
      dragRef.current.baseX + (event.clientX - dragRef.current.startX);
    const nextY =
      dragRef.current.baseY + (event.clientY - dragRef.current.startY);

    setPosition({ x: nextX, y: nextY });
  };

  const stopDragging = () => {
    dragRef.current.active = false;
  };

  useEffect(() => {
    if (!activePhoto) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePhoto();
      if (event.key === "ArrowLeft") showPreviousPhoto();
      if (event.key === "ArrowRight") showNextPhoto();
      if (event.key === "+" || event.key === "=") zoomIn();
      if (event.key === "-") zoomOut();
      if (event.key === "0") resetView();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePhoto, activePhotoIndex, zoom, position]);

  if (!isValidGalleryYear(year)) {
    return (
      <main className="min-h-screen bg-secondary px-4 py-10">
        <section className="mx-auto max-w-[900px] rounded-2xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-3xl font-black text-black">Gallery Not Found</h1>
          <p className="mt-3 text-gray-600">
            This year gallery does not exist.
          </p>

          <Link
            href="/gallery"
            className="mt-6 inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-primary/90"
          >
            Back to Gallery
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-secondary px-3 py-8 sm:px-4 sm:py-10">
      <section className="mx-auto max-w-[1280px]">
        <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-7">
          <Link
            href="/gallery"
            className="inline-flex rounded-lg bg-primary px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-lg"
          >
            ← Back to Year Cards
          </Link>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Dynamic Year Gallery
              </p>

              <h1 className="mt-2 text-3xl font-black text-black sm:text-4xl">
                {selectedYearInfo?.title}
              </h1>

              <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-gray-600 sm:text-base">
                {selectedYearInfo?.description}
              </p>

              <div className="mt-4 h-[3px] w-24 rounded-full bg-primary" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-secondary px-5 py-4 text-center">
                <p className="text-2xl font-black text-primary">
                  {photos.length}
                </p>
                <p className="text-xs font-bold text-gray-600">Photos</p>
              </div>

              <div className="rounded-xl bg-secondary px-5 py-4 text-center">
                <p className="text-2xl font-black text-primary">
                  {videos.length}
                </p>
                <p className="text-xs font-bold text-gray-600">Videos</p>
              </div>
            </div>
          </div>
        </div>

        <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 sm:p-6">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Photos
            </p>

            <h2 className="mt-2 text-2xl font-black text-black">
              {year} Photo Gallery
            </h2>

            <p className="mt-2 text-sm font-medium text-gray-600">
              Click any image to open preview. Use mouse wheel to zoom in/out.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {photos.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => openPhoto(index)}
                className="group overflow-hidden rounded-2xl bg-white text-left shadow-md ring-1 ring-secondary transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:ring-primary/40"
              >
                <div className="relative h-[230px] w-full overflow-hidden bg-secondary">
                  <Image
                    src={item.image}
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

        <section className="mt-8 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 sm:p-6">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Videos
            </p>

            <h2 className="mt-2 text-2xl font-black text-black">
              {year} Video Gallery
            </h2>

            <p className="mt-2 text-sm font-medium text-gray-600">
              Click any video card to open video in YouTube.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {videos.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-secondary transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:ring-primary/40"
              >
                <div className="relative h-[230px] w-full overflow-hidden bg-secondary">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/35">
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
              </Link>
            ))}
          </div>
        </section>
      </section>

      {activePhoto && (
        <section
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 px-3 py-20"
          onWheel={handleWheelZoom}
        >
          <button
            type="button"
            onClick={closePhoto}
            className="absolute inset-0 cursor-default"
            aria-label="Close modal background"
          />

          <div className="absolute left-4 top-5 z-20 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
            {activePhotoIndex !== null ? activePhotoIndex + 1 : 0} /{" "}
            {photos.length}
          </div>

          <div className="absolute right-4 top-5 z-20 flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={zoomIn}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg transition-all duration-300 hover:scale-110 sm:h-11 sm:w-11"
              aria-label="Zoom in"
            >
              <PlusIcon />
            </button>

            <button
              type="button"
              onClick={zoomOut}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg transition-all duration-300 hover:scale-110 sm:h-11 sm:w-11"
              aria-label="Zoom out"
            >
              <MinusIcon />
            </button>

            <button
              type="button"
              onClick={resetView}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg transition-all duration-300 hover:scale-110 sm:h-11 sm:w-11"
              aria-label="Reset zoom"
            >
              <ResetIcon />
            </button>

            <button
              type="button"
              onClick={closePhoto}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary/90 sm:h-11 sm:w-11"
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </div>

          <button
            type="button"
            onClick={showPreviousPhoto}
            disabled={activePhotoIndex === null || activePhotoIndex <= 0}
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-3xl font-bold text-black shadow-lg transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-30 sm:left-5 sm:h-12 sm:w-12"
          >
            ‹
          </button>

          <div
            className={`relative z-10 flex max-h-[68vh] max-w-[82vw] items-center justify-center overflow-hidden ${
              zoom > 1 ? "cursor-grab active:cursor-grabbing" : ""
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onDoubleClick={resetView}
          >
            <Image
              src={activePhoto.image}
              alt={activePhoto.title}
              width={1500}
              height={950}
              priority
              className="max-h-[68vh] w-auto select-none object-contain transition-transform duration-200"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
              }}
              draggable={false}
            />
          </div>

          <button
            type="button"
            onClick={showNextPhoto}
            disabled={
              activePhotoIndex === null || activePhotoIndex >= photos.length - 1
            }
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-3xl font-bold text-black shadow-lg transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-30 sm:right-5 sm:h-12 sm:w-12"
          >
            ›
          </button>

          <div className="absolute bottom-24 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/10 px-5 py-2 text-center text-xs font-bold uppercase text-white backdrop-blur sm:text-sm">
            {activePhoto.title}
          </div>

          <div className="absolute bottom-5 left-1/2 z-20 flex max-w-[92vw] -translate-x-1/2 gap-3 overflow-x-auto rounded-2xl bg-white/10 p-3 backdrop-blur">
            {photos.map((item, index) => {
              const isActive = index === activePhotoIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => openPhoto(index)}
                  className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg ring-2 transition-all duration-300 sm:h-16 sm:w-24 ${
                    isActive
                      ? "scale-105 ring-primary"
                      : "ring-white/40 hover:scale-105 hover:ring-white"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </button>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
};

export default GalleryYearPage;