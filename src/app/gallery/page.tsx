import Image from "next/image";
import Link from "next/link";
import {
  galleryPhotos,
  galleryVideos,
  galleryYears,
  getYearCover,
} from "./galleryData";

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

const GalleryPage = () => {
  return (
    <main className="min-h-screen bg-secondary px-3 py-8 sm:px-4 sm:py-10">
      <section className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            School Gallery
          </p>

          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-black text-black sm:text-4xl">
                Photo & Video Gallery
              </h1>

              <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-gray-600 sm:text-base">
                Select any year card. A dynamic page will open and show only
                that year&apos;s images and videos.
              </p>

              <div className="mt-4 h-0.75 w-24 rounded-full bg-primary" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-secondary px-4 py-3 text-center">
                <p className="text-xl font-black text-primary">
                  {galleryYears.length}
                </p>
                <p className="text-xs font-bold text-gray-600">Years</p>
              </div>

              <div className="rounded-xl bg-secondary px-4 py-3 text-center">
                <p className="text-xl font-black text-primary">
                  {galleryPhotos.length}
                </p>
                <p className="text-xs font-bold text-gray-600">Photos</p>
              </div>

              <div className="rounded-xl bg-secondary px-4 py-3 text-center">
                <p className="text-xl font-black text-primary">
                  {galleryVideos.length}
                </p>
                <p className="text-xs font-bold text-gray-600">Videos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Year Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {galleryYears.map((item) => {
            const cover = getYearCover(item.year);

            const photoCount = galleryPhotos.filter(
              (photo) => photo.year === item.year
            ).length;

            const videoCount = galleryVideos.filter(
              (video) => video.year === item.year
            ).length;

            return (
              <Link
                key={item.year}
                href={`/gallery/${item.year}`}
                className="group overflow-hidden rounded-2xl bg-white text-left shadow-md ring-1 ring-secondary transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:ring-primary/40"
              >
                <div className="relative h-57.5 w-full overflow-hidden bg-secondary">
                  <Image
                    src={cover}
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

                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1 text-sm font-black text-primary shadow">
                    {item.year}
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
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-black text-primary">
                      {photoCount} Photos
                    </span>

                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-black text-primary">
                      {videoCount} Videos
                    </span>

                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-black text-white">
                      View Gallery
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;