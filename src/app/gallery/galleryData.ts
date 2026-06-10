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