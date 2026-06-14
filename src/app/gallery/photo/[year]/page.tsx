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

const PhotoYearPage = () => {
  const params = useParams<{ year: string }>();
  const year = String(params.year ?? "");

  const dragRef = useRef({
    active: false,
    startX: 0,
    startY: 0,
    baseX: 0,
    baseY: 0,
  });

  const [data, setData] = useState<PhotoYear[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

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

  const selectedYear = useMemo(() => {
    return data.find((item) => item.year === year) ?? null;
  }, [data, year]);

  const photos = selectedYear?.photos ?? [];
  const activePhoto = activeIndex !== null ? photos[activeIndex] ?? null : null;

  const resetView = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const openPhoto = (index: number) => {
    setActiveIndex(index);
    resetView();
  };

  const closePhoto = () => {
    setActiveIndex(null);
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
    if (activeIndex === null || activeIndex <= 0) return;

    setActiveIndex(activeIndex - 1);
    resetView();
  };

  const showNextPhoto = () => {
    if (activeIndex === null || activeIndex >= photos.length - 1) return;

    setActiveIndex(activeIndex + 1);
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

    setPosition({
      x: dragRef.current.baseX + event.clientX - dragRef.current.startX,
      y: dragRef.current.baseY + event.clientY - dragRef.current.startY,
    });
  };

  const stopDragging = () => {
    dragRef.current.active = false;
  };

  const handleDoubleClick = () => {
    if (zoom > 1) {
      resetView();
    } else {
      zoomTo(2);
    }
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
  }, [activePhoto, activeIndex, zoom, position, photos.length]);

  if (loading) {
    return (
      <main className="min-h-screen bg-background px-4 py-10">
        <section className="mx-auto max-w-7xl rounded-2xl bg-bg-primary p-8 text-center shadow-sm">
          <p className="text-sm font-bold text-secondary">Loading photos...</p>
        </section>
      </main>
    );
  }

  if (!selectedYear) {
    return (
      <main className="min-h-screen bg-background px-4 py-10">
        <section className="mx-auto max-w-[900px] rounded-2xl bg-bg-primary p-8 text-center shadow-sm">
          <h1 className="text-3xl font-black text-primary">Photo Gallery Not Found</h1>
          <p className="mt-3 text-secondary">This year photo gallery does not exist.</p>

          <Link
            href="/gallery/photo"
            className="mt-6 inline-flex rounded-lg bg-primary px-6 py-3 text-sm font-bold text-inverse transition-all duration-300 hover:bg-primary/90"
          >
            Back to Photo Gallery
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-3 py-8 sm:px-4 sm:py-10">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-2xl bg-bg-primary p-5 shadow-sm ring-1 ring-black/5 sm:p-7">
          <Link
            href="/gallery/photo"
            className="inline-flex rounded-lg bg-primary px-5 py-2 text-sm font-bold text-inverse transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-lg"
          >
            ← Back to Year Cards
          </Link>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Dynamic Photo Gallery
              </p>

              <h1 className="mt-2 text-3xl font-black text-primary sm:text-4xl">
                {selectedYear.title}
              </h1>

              <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-secondary sm:text-base">
                {selectedYear.description}
              </p>

              <div className="mt-4 h-[3px] w-24 rounded-full bg-primary" />
            </div>

            <div className="rounded-xl bg-secondary px-5 py-4 text-center">
              <p className="text-2xl font-black text-primary">{photos.length}</p>
              <p className="text-xs font-bold text-secondary">Photos</p>
            </div>
          </div>
        </div>

        <section className="rounded-2xl bg-bg-primary p-4 shadow-sm ring-1 ring-black/5 sm:p-6">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Photos
            </p>

            <h2 className="mt-2 text-2xl font-black text-primary">
              {year} Photo Gallery
            </h2>

            <p className="mt-2 text-sm font-medium text-secondary">
              Click any image to open preview. Mouse wheel zooms in/out. Double click toggles zoom.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {photos.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => openPhoto(index)}
                className="group overflow-hidden rounded-2xl bg-bg-primary text-left shadow-md ring-1 ring-secondary transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:ring-primary/40"
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
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-primary text-primary shadow-lg">
                      <SearchIcon />
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-black text-primary transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-secondary">
                    {item.description}
                  </p>
                </div>
              </button>
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

          <div className="absolute left-4 top-5 z-20 rounded-full bg-bg-primary/10 px-4 py-2 text-sm font-bold text-inverse backdrop-blur">
            {(activeIndex ?? 0) + 1} / {photos.length} · {Math.round(zoom * 100)}%
          </div>

          <div className="absolute right-4 top-5 z-20 flex items-center gap-2 sm:gap-3">
            <a
              href={activePhoto.image}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 items-center justify-center rounded-full bg-bg-primary px-4 text-xs font-black text-primary shadow-lg transition-all duration-300 hover:scale-105 sm:h-11"
            >
              Open
            </a>

            <button
              type="button"
              onClick={zoomIn}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-primary text-primary shadow-lg transition-all duration-300 hover:scale-110 sm:h-11 sm:w-11"
              aria-label="Zoom in"
            >
              <PlusIcon />
            </button>

            <button
              type="button"
              onClick={zoomOut}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-primary text-primary shadow-lg transition-all duration-300 hover:scale-110 sm:h-11 sm:w-11"
              aria-label="Zoom out"
            >
              <MinusIcon />
            </button>

            <button
              type="button"
              onClick={resetView}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-primary text-xs font-black text-primary shadow-lg transition-all duration-300 hover:scale-110 sm:h-11 sm:w-11"
              aria-label="Reset zoom"
            >
              1x
            </button>

            <button
              type="button"
              onClick={closePhoto}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-inverse shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary/90 sm:h-11 sm:w-11"
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </div>

          <button
            type="button"
            onClick={showPreviousPhoto}
            disabled={activeIndex === null || activeIndex <= 0}
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-bg-primary text-3xl font-bold text-primary shadow-lg transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-30 sm:left-5 sm:h-12 sm:w-12"
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
            onDoubleClick={handleDoubleClick}
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
            disabled={activeIndex === null || activeIndex >= photos.length - 1}
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-bg-primary text-3xl font-bold text-primary shadow-lg transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-30 sm:right-5 sm:h-12 sm:w-12"
          >
            ›
          </button>

          <div className="absolute bottom-24 left-1/2 z-20 -translate-x-1/2 rounded-full bg-bg-primary/10 px-5 py-2 text-center text-xs font-bold uppercase text-inverse backdrop-blur sm:text-sm">
            {activePhoto.title}
          </div>

          <div className="absolute bottom-5 left-1/2 z-20 flex max-w-[92vw] -translate-x-1/2 gap-3 overflow-x-auto rounded-2xl bg-bg-primary/10 p-3 backdrop-blur">
            {photos.map((item, index) => {
              const isActive = index === activeIndex;

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

export default PhotoYearPage;
