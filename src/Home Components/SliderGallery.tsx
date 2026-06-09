"use client";

import Image from "next/image";
import { useRef } from "react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";

type GalleryItem = {
  id: number;
  image: string;
  alt: string;
};

const galleryImages: GalleryItem[] = [
  {
    id: 1,
    image: "/assets/Slider1 images/building.jpg",
    alt: "Building",
  },
  {
    id: 2,
    image: "/assets/Slider1 images/anual.jpg",
    alt: "Annual",
  },
  {
    id: 3,
    image: "/assets/Slider1 images/parod.jpg",
    alt: "Parade",
  },
  {
    id: 4,
    image: "/assets/Slider1 images/building.jpg",
    alt: "Building",
  },
  {
    id: 5,
    image: "/assets/Slider1 images/anual.jpg",
    alt: "Annual",
  },
  {
    id: 6,
    image: "/assets/Slider1 images/parod.jpg",
    alt: "Parade",
  },
];

const SliderGallery = () => {
  const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <div className="mb-10">
      <h1 className="text-center font-bold text-2xl py-2 text-primary">
        Photo Gallery
      </h1>

      <Swiper
        ref={swiperRef}
        freeMode={true}
        breakpoints={{
          360: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        {galleryImages.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="overflow-hidden">
              <Image
                className="h-75 w-full transition-transform duration-300 hover:scale-125"
                src={item.image}
                alt={item.alt}
                width={800}
                height={300}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderGallery;