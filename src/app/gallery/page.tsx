"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type WheelEvent,
} from "react";

type GalleryType = "photo" | "video";

type YearItem = {
  year: string;
};

type PhotoItem = {
  id: number;
  year: string;
  title: string;
  image: string;
};

type VideoItem = {
  id: number;
  year: string;
  title: string;
  thumbnail: string;
  url: string;
};

const years: YearItem[] = [
  { year: "2020" },
  { year: "2021" },
  { year: "2022" },
  { year: "2023" },
  { year: "2024" },
  { year: "2025" },
  { year: "2026" },
];

const photoPool = [
  {
    title: "Classroom Activity",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "School Campus",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Student Learning",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Library Session",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Group Program",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Annual Event",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Academic Discussion",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Students Together",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Education Program",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Seminar Activity",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80",
  },
];

const videoPool = [
  {
    title: "Education Video",
    videoId: "jNQXAC9IVRw",
  },
  {
    title: "Motivational Speech",
    videoId: "UF8uR6Z6KLc",
  },
  {
    title: "Student Inspiration",
    videoId: "Ks-_Mh1QhMc",
  },
  {
    title: "Learning Session",
    videoId: "arj7oStGLkU",
  },
  {
    title: "Academic Talk",
    videoId: "8S0FDjFBj8o",
  },
  {
    title: "School Program",
    videoId: "tgbNymZ7vqY",
  },
  {
    title: "Campus Activity",
    videoId: "aqz-KE-bpKQ",
  },
];

const photos: PhotoItem[] = years.flatMap((yearItem, yearIndex) =>
  Array.from({ length: 5 }).map((_, imageIndex) => {
    const photo = photoPool[(yearIndex + imageIndex) % photoPool.length];

    return {
      id: yearIndex * 100 + imageIndex + 1,
      year: yearItem.year,
      title: `${photo.title} ${yearItem.year}`,
      image: photo.image,
    };
  })
);

const videos: VideoItem[] = years.flatMap((yearItem, yearIndex) =>
  Array.from({ length: 5 }).map((_, videoIndex) => {
    const video = videoPool[(yearIndex + videoIndex) % videoPool.length];

    return {
      id: yearIndex * 100 + videoIndex + 1,
      year: yearItem.year,
      title: `${video.title} ${yearItem.year}`,
      thumbnail: `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`,
      url: `https://www.youtube.com/watch?v=${video.videoId}`,
    };
  })
);

const CheckIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M9 11.5L11.2 13.7L15.8 8.6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4H20V20H4V4Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
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
  return <span className="text-xl font-bold leading-none">×</span>;
};

const ResetIcon = () => {
  return <span className="text-xs font-black leading-none">1x</span>;
};

const getParamsFromUrl = () => {
  if (typeof window === "undefined") {
    return {
      type: "photo" as GalleryType,
      year: "",
      imageId: "",
    };
  }

  const params = new URLSearchParams(window.location.search);
  const typeParam = params.get("type");
  const yearParam = params.get("year") ?? "";
  const imageParam = params.get("image") ?? "";

  return {
    type:
      typeParam === "video"
        ? ("video" as GalleryType)
        : ("photo" as GalleryType),
    year: yearParam,
    imageId: imageParam,
  };
};

const MediaPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const wheelLockRef = useRef<number>(0);

  const [selectedType, setSelectedType] = useState<GalleryType>("photo");
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedImageId, setSelectedImageId] = useState<string>("");
  const [zoom, setZoom] = useState<number>(1);

  const syncFromUrl = () => {
    const params = getParamsFromUrl();

    setSelectedType(params.type);
    setSelectedYear(params.year);
    setSelectedImageId(params.imageId);
  };

  useEffect(() => {
    syncFromUrl();

    window.addEventListener("popstate", syncFromUrl);

    return () => {
      window.removeEventListener("popstate", syncFromUrl);
    };
  }, []);

  const currentYearPhotos = useMemo(() => {
    if (!selectedYear) return [];

    return photos.filter((item) => item.year === selectedYear);
  }, [selectedYear]);

  const currentYearVideos = useMemo(() => {
    if (!selectedYear) return [];

    return videos.filter((item) => item.year === selectedYear);
  }, [selectedYear]);

  const selectedImage = useMemo(() => {
    return photos.find((item) => String(item.id) === selectedImageId) ?? null;
  }, [selectedImageId]);

  const selectedImageIndex = useMemo(() => {
    if (!selectedImage) return -1;

    return currentYearPhotos.findIndex((item) => item.id === selectedImage.id);
  }, [selectedImage, currentYearPhotos]);

  const selectedTypeCount = selectedType === "photo" ? photos.length : videos.length;

  const changeType = (type: GalleryType) => {
    setSelectedType(type);
    setSelectedYear("");
    setSelectedImageId("");
    setZoom(1);

    router.push(`${pathname}?type=${type}`, { scroll: false });
  };

  const openYear = (year: string) => {
    setSelectedYear(year);
    setSelectedImageId("");
    setZoom(1);

    router.push(`${pathname}?type=${selectedType}&year=${year}`, {
      scroll: false,
    });
  };

  const backToYears = () => {
    setSelectedYear("");
    setSelectedImageId("");
    setZoom(1);

    router.push(`${pathname}?type=${selectedType}`, { scroll: false });
  };

  const openImage = (imageId: number) => {
    setSelectedImageId(String(imageId));
    setZoom(1);

    router.push(
      `${pathname}?type=photo&year=${selectedYear}&image=${imageId}`,
      {
        scroll: false,
      }
    );
  };

  const closeImage = () => {
    setSelectedImageId("");
    setZoom(1);

    router.push(`${pathname}?type=photo&year=${selectedYear}`, {
      scroll: false,
    });
  };

  const zoomIn = () => {
    setZoom((previousZoom) => Math.min(previousZoom + 0.2, 3));
  };

  const zoomOut = () => {
    setZoom((previousZoom) => Math.max(previousZoom - 0.2, 1));
  };

  const resetZoom = () => {
    setZoom(1);
  };

  const showPreviousImage = () => {
    if (selectedImageIndex <= 0) return;

    const previousImage = currentYearPhotos[selectedImageIndex - 1];

    setSelectedImageId(String(previousImage.id));
    setZoom(1);

    router.push(
      `${pathname}?type=photo&year=${selectedYear}&image=${previousImage.id}`,
      {
        scroll: false,
      }
    );
  };

  const showNextImage = () => {
    if (selectedImageIndex < 0) return;
    if (selectedImageIndex >= currentYearPhotos.length - 1) return;

    const nextImage = currentYearPhotos[selectedImageIndex + 1];

    setSelectedImageId(String(nextImage.id));
    setZoom(1);

    router.push(
      `${pathname}?type=photo&year=${selectedYear}&image=${nextImage.id}`,
      {
        scroll: false,
      }
    );
  };

  const handleLightboxWheel = (event: WheelEvent<HTMLElement>) => {
    event.preventDefault();

    const now = Date.now();

    if (now - wheelLockRef.current < 450) return;

    wheelLockRef.current = now;

    if (event.deltaY > 0) {
      showNextImage();
    } else {
      showPreviousImage();
    }
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeImage();
      if (event.key === "ArrowLeft") showPreviousImage();
      if (event.key === "ArrowRight") showNextImage();
      if (event.key === "+") zoomIn();
      if (event.key === "-") zoomOut();
      if (event.key === "0") resetZoom();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, selectedImageIndex, currentYearPhotos]);

  return (
    <main className="min-h-screen bg-secondary px-3 py-6 sm:px-4 sm:py-10">
      <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Sidebar */}
        <aside className="lg:col-span-3">
          <div className="sticky top-24 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <div className="flex items-center gap-3 border-b border-secondary px-5 py-5 text-2xl font-bold text-black">
              <span className="text-primary">
                <CheckIcon />
              </span>
              <span>Gallery</span>
            </div>

            <button
              type="button"
              onClick={() => changeType("photo")}
              className={`w-full px-5 py-4 text-left text-lg font-semibold transition-all duration-300 ${
                selectedType === "photo"
                  ? "bg-primary text-white shadow-inner"
                  : "bg-white text-black hover:bg-secondary hover:pl-8 hover:text-primary"
              }`}
            >
              ফটোগ্যালারী
            </button>

            <button
              type="button"
              onClick={() => changeType("video")}
              className={`w-full px-5 py-4 text-left text-lg font-semibold transition-all duration-300 ${
                selectedType === "video"
                  ? "bg-primary text-white shadow-inner"
                  : "bg-white text-black hover:bg-secondary hover:pl-8 hover:text-primary"
              }`}
            >
              ভিডিও গ্যালারী
            </button>

            <div className="border-t border-secondary p-5">
              <div className="rounded-xl bg-secondary p-4">
                <p className="text-sm font-bold text-black">Information</p>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Select a year from the right side table. Then only that
                  selected year&apos;s photo or video gallery will show.
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Content */}
        <section className="lg:col-span-9">
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 sm:p-6">
            {/* Top Info Cards */}
            <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl bg-secondary p-4">
                <p className="text-xs font-bold uppercase text-gray-600">
                  Years
                </p>
                <p className="mt-1 text-2xl font-black text-primary">
                  {years.length}
                </p>
              </div>

              <div className="rounded-xl bg-secondary p-4">
                <p className="text-xs font-bold uppercase text-gray-600">
                  Photos
                </p>
                <p className="mt-1 text-2xl font-black text-primary">
                  {photos.length}
                </p>
              </div>

              <div className="rounded-xl bg-secondary p-4">
                <p className="text-xs font-bold uppercase text-gray-600">
                  Videos
                </p>
                <p className="mt-1 text-2xl font-black text-primary">
                  {videos.length}
                </p>
              </div>

              <div className="rounded-xl bg-secondary p-4">
                <p className="text-xs font-bold uppercase text-gray-600">
                  Active
                </p>
                <p className="mt-1 text-xl font-black capitalize text-primary">
                  {selectedType}
                </p>
              </div>
            </div>

            {!selectedYear && (
              <>
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                      Select Year
                    </p>

                    <h1 className="mt-2 text-2xl font-bold text-black sm:text-3xl">
                      {selectedType === "photo"
                        ? "Photo Gallery"
                        : "Video Gallery"}
                    </h1>

                    <div className="mt-3 h-[3px] w-20 rounded-full bg-primary" />
                  </div>

                  <p className="w-fit rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-gray-700">
                    2020 - 2026 · {selectedTypeCount} total items
                  </p>
                </div>

                {/* Desktop / Tablet Year Table */}
                <div className="hidden overflow-hidden rounded-2xl border border-secondary md:block">
                  <table className="w-full border-collapse bg-white text-left">
                    <thead className="bg-secondary">
                      <tr>
                        <th className="px-5 py-4 text-sm font-bold text-black">
                          SL
                        </th>
                        <th className="px-5 py-4 text-sm font-bold text-black">
                          Year
                        </th>
                        <th className="px-5 py-4 text-sm font-bold text-black">
                          Gallery Type
                        </th>
                        <th className="px-5 py-4 text-sm font-bold text-black">
                          Total
                        </th>
                        <th className="px-5 py-4 text-right text-sm font-bold text-black">
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {years.map((item, index) => {
                        const total =
                          selectedType === "photo"
                            ? photos.filter((photo) => photo.year === item.year)
                                .length
                            : videos.filter((video) => video.year === item.year)
                                .length;

                        return (
                          <tr
                            key={item.year}
                            className="border-t border-secondary transition-all duration-300 hover:bg-secondary/70"
                          >
                            <td className="px-5 py-4 text-sm font-semibold text-gray-700">
                              {String(index + 1).padStart(2, "0")}
                            </td>

                            <td className="px-5 py-4 text-xl font-black text-black">
                              {item.year}
                            </td>

                            <td className="px-5 py-4 text-sm font-semibold text-gray-700">
                              {selectedType === "photo"
                                ? "Photo Gallery"
                                : "Video Gallery"}
                            </td>

                            <td className="px-5 py-4">
                              <span className="rounded-full bg-secondary px-4 py-1 text-sm font-bold text-primary">
                                {total} items
                              </span>
                            </td>

                            <td className="px-5 py-4 text-right">
                              <button
                                type="button"
                                onClick={() => openYear(item.year)}
                                className="rounded-lg bg-primary px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-lg"
                              >
                                View {item.year}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Year Cards */}
                <div className="grid grid-cols-1 gap-4 md:hidden">
                  {years.map((item) => {
                    const total =
                      selectedType === "photo"
                        ? photos.filter((photo) => photo.year === item.year)
                            .length
                        : videos.filter((video) => video.year === item.year)
                            .length;

                    return (
                      <button
                        key={item.year}
                        type="button"
                        onClick={() => openYear(item.year)}
                        className="group rounded-2xl border border-secondary bg-white p-5 text-left shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-2xl font-black text-black transition-colors duration-300 group-hover:text-primary">
                              {item.year}
                            </p>

                            <p className="mt-1 text-sm font-semibold text-gray-600">
                              {selectedType === "photo"
                                ? "Photo Gallery"
                                : "Video Gallery"}
                            </p>
                          </div>

                          <span className="rounded-full bg-secondary px-4 py-1 text-sm font-bold text-primary">
                            {total} items
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {selectedYear && selectedType === "photo" && (
              <>
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                      Photo Gallery
                    </p>

                    <h1 className="mt-2 text-2xl font-bold text-black sm:text-3xl">
                      Year {selectedYear}
                    </h1>

                    <p className="mt-2 text-sm font-medium text-gray-600">
                      Showing {currentYearPhotos.length} photos from{" "}
                      {selectedYear}. Click any image to open the full preview.
                    </p>

                    <div className="mt-3 h-[3px] w-20 rounded-full bg-primary" />
                  </div>

                  <button
                    type="button"
                    onClick={backToYears}
                    className="w-fit rounded-lg bg-primary px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-lg"
                  >
                    Back to Year Table
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {currentYearPhotos.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => openImage(item.id)}
                      className="group overflow-hidden rounded-2xl bg-white text-center shadow-md ring-1 ring-secondary transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:ring-primary/40"
                    >
                      <div className="relative h-[220px] w-full overflow-hidden bg-secondary">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/35 group-hover:opacity-100">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <SearchIcon />
                          </div>
                        </div>
                      </div>

                      <div className="px-4 py-4">
                        <h2 className="text-sm font-bold uppercase text-primary">
                          {item.title}
                        </h2>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {selectedYear && selectedType === "video" && (
              <>
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                      Video Gallery
                    </p>

                    <h1 className="mt-2 text-2xl font-bold text-black sm:text-3xl">
                      Year {selectedYear}
                    </h1>

                    <p className="mt-2 text-sm font-medium text-gray-600">
                      Showing {currentYearVideos.length} videos from{" "}
                      {selectedYear}. Click any video to open YouTube.
                    </p>

                    <div className="mt-3 h-[3px] w-20 rounded-full bg-primary" />
                  </div>

                  <button
                    type="button"
                    onClick={backToYears}
                    className="w-fit rounded-lg bg-primary px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-lg"
                  >
                    Back to Year Table
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {currentYearVideos.map((item) => (
                    <Link
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-secondary transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:ring-primary/40"
                    >
                      <div className="relative h-[220px] w-full overflow-hidden bg-secondary">
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 flex items-center justify-center bg-black/35">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                            ▶
                          </div>
                        </div>
                      </div>

                      <div className="p-4">
                        <h2 className="text-base font-bold text-black transition-colors duration-300 group-hover:text-primary">
                          {item.title}
                        </h2>

                        <p className="mt-2 text-sm font-medium text-gray-600">
                          Watch video on YouTube
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </section>

      {/* Image Lightbox */}
      {selectedImage && (
        <section
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 px-3 py-20"
          onWheel={handleLightboxWheel}
        >
          <div className="absolute left-4 top-5 z-20 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
            {selectedImageIndex + 1} / {currentYearPhotos.length}
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
              onClick={resetZoom}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg transition-all duration-300 hover:scale-110 sm:h-11 sm:w-11"
              aria-label="Reset zoom"
            >
              <ResetIcon />
            </button>

            <button
              type="button"
              onClick={closeImage}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary/90 sm:h-11 sm:w-11"
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </div>

          <button
            type="button"
            onClick={showPreviousImage}
            disabled={selectedImageIndex <= 0}
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-3xl font-bold text-black shadow-lg transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-30 sm:left-5 sm:h-12 sm:w-12"
          >
            ‹
          </button>

          <div className="relative flex max-h-[68vh] max-w-[82vw] items-center justify-center overflow-hidden">
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              width={1500}
              height={950}
              priority
              className="max-h-[68vh] w-auto select-none object-contain transition-transform duration-300"
              style={{ transform: `scale(${zoom})` }}
              draggable={false}
            />
          </div>

          <button
            type="button"
            onClick={showNextImage}
            disabled={
              selectedImageIndex >= currentYearPhotos.length - 1 ||
              selectedImageIndex < 0
            }
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-3xl font-bold text-black shadow-lg transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-30 sm:right-5 sm:h-12 sm:w-12"
          >
            ›
          </button>

          <div className="absolute bottom-24 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/10 px-5 py-2 text-center text-xs font-bold uppercase text-white backdrop-blur sm:text-sm">
            {selectedImage.title}
          </div>

          <div className="absolute bottom-5 left-1/2 z-20 flex max-w-[92vw] -translate-x-1/2 gap-3 overflow-x-auto rounded-2xl bg-white/10 p-3 backdrop-blur">
            {currentYearPhotos.map((item) => {
              const isActive = item.id === selectedImage.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => openImage(item.id)}
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

export default MediaPage;