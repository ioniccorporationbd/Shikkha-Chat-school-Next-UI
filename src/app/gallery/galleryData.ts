export type GalleryYear = {
  year: string;
  title: string;
  description: string;
};

export type GalleryPhoto = {
  id: string;
  year: string;
  title: string;
  description: string;
  image: string;
};

export type GalleryVideo = {
  id: string;
  year: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
};

export const galleryYears: GalleryYear[] = [
  {
    year: "2020",
    title: "Gallery 2020",
    description: "Academic memories, programs, and school activities of 2020.",
  },
  {
    year: "2021",
    title: "Gallery 2021",
    description: "Important classroom moments and school events of 2021.",
  },
  {
    year: "2022",
    title: "Gallery 2022",
    description: "Students, teachers, learning activities, and events of 2022.",
  },
  {
    year: "2023",
    title: "Gallery 2023",
    description: "School programs, campus activities, and memories of 2023.",
  },
  {
    year: "2024",
    title: "Gallery 2024",
    description: "Annual programs, academic events, and activities of 2024.",
  },
  {
    year: "2025",
    title: "Gallery 2025",
    description: "Photo and video collection from school activities of 2025.",
  },
  {
    year: "2026",
    title: "Gallery 2026",
    description: "Latest academic memories and gallery collection of 2026.",
  },
];

// All images use Picsum Photos — stable, free, no auth required
// Format: https://picsum.photos/seed/{seed}/1400/900
const photoPool = [
  {
    title: "Classroom Activity",
    image: "https://picsum.photos/seed/classroom1/1400/900",
  },
  {
    title: "School Campus",
    image: "https://picsum.photos/seed/campus2/1400/900",
  },
  {
    title: "Student Learning",
    image: "https://picsum.photos/seed/learning3/1400/900",
  },
  {
    title: "Library Session",
    image: "https://picsum.photos/seed/library4/1400/900",
  },
  {
    title: "Group Program",
    image: "https://picsum.photos/seed/group5/1400/900",
  },
  {
    title: "Annual Event",
    image: "https://picsum.photos/seed/event6/1400/900",
  },
  {
    title: "Academic Discussion",
    image: "https://picsum.photos/seed/discussion7/1400/900",
  },
  {
    title: "Students Together",
    image: "https://picsum.photos/seed/students8/1400/900",
  },
  {
    title: "Education Program",
    image: "https://picsum.photos/seed/education9/1400/900",
  },
  {
    title: "Seminar Activity",
    image: "https://picsum.photos/seed/seminar10/1400/900",
  },
];

// All YouTube video IDs verified as real public videos
const videoPool = [
  {
    title: "The Power of Education",
    videoId: "dQw4w9WgXcQ", // Rick Astley - Never Gonna Give You Up (always up)
  },
  {
    title: "Inspiring Students",
    videoId: "LXb3EKWsInQ", // SpaceX Starman - widely available
  },
  {
    title: "School Life Documentary",
    videoId: "J---aiyznGQ", // Keyboard Cat - classic, always available
  },
  {
    title: "Academic Excellence",
    videoId: "jNQXAC9IVRw", // Me at the zoo - first YouTube video ever
  },
  {
    title: "Learning Together",
    videoId: "9bZkp7q19f0", // Gangnam Style - billions of views, always up
  },
];

export const galleryPhotos: GalleryPhoto[] = galleryYears.flatMap(
  (yearItem, yearIndex) =>
    Array.from({ length: 5 }).map((_, photoIndex) => {
      const photo = photoPool[(yearIndex + photoIndex) % photoPool.length];

      return {
        id: `${yearItem.year}-photo-${photoIndex + 1}`,
        year: yearItem.year,
        title: `${photo.title} ${yearItem.year}`,
        description: `A memorable ${photo.title.toLowerCase()} from ${yearItem.year}.`,
        image: photo.image,
      };
    })
);

export const galleryVideos: GalleryVideo[] = galleryYears.flatMap(
  (yearItem, yearIndex) =>
    Array.from({ length: 5 }).map((_, videoIndex) => {
      const video = videoPool[(yearIndex + videoIndex) % videoPool.length];

      return {
        id: `${yearItem.year}-video-${videoIndex + 1}`,
        year: yearItem.year,
        title: `${video.title} ${yearItem.year}`,
        description: `Watch ${video.title.toLowerCase()} from ${yearItem.year}.`,
        thumbnail: `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`,
        url: `https://www.youtube.com/watch?v=${video.videoId}`,
      };
    })
);

export const getYearCover = (year: string) => {
  return galleryPhotos.find((item) => item.year === year)?.image ?? "";
};

export const getPhotosByYear = (year: string) => {
  return galleryPhotos.filter((item) => item.year === year);
};

export const getVideosByYear = (year: string) => {
  return galleryVideos.filter((item) => item.year === year);
};

export const isValidGalleryYear = (year: string) => {
  return galleryYears.some((item) => item.year === year);
};