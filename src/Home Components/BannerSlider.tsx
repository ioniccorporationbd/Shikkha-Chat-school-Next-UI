"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type SliderItem = {
  id: number;
  image: string;
  alt: string;
};

const sliders: SliderItem[] = [
  {
    id: 1,
    image: "/assets/Banner images/slider1.jpg",
    alt: "Slider image 1",
  },
  {
    id: 2,
    image: "/assets/Banner images/slider2.jpg",
    alt: "Slider image 2",
  },
  {
    id: 3,
    image: "/assets/Banner images/slider3.jpg",
    alt: "Slider image 3",
  },
  {
    id: 4,
    image: "/assets/Banner images/slider4.jpg",
    alt: "Slider image 4",
  },
  {
    id: 5,
    image: "/assets/Banner images/slider5.jpg",
    alt: "Slider image 5",
  },
];

const BannerSlider = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <Link
        href="https://education.ionicerp.xyz"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-3 top-3 z-20 rounded-md bg-primary px-4 py-2 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-px hover:bg-primary/90 hover:shadow-lg sm:right-6 sm:top-6 md:px-6 md:py-2.5 lg:right-20 lg:top-10 lg:rounded-xl lg:px-8 lg:py-3 lg:text-base"
      >
        Login
      </Link>

      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        speed={900}
        grabCursor={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {sliders.map((slider, index) => (
          <SwiperSlide key={slider.id}>
            <div className="relative h-55 w-full overflow-hidden sm:h-82.5 md:h-107.5 lg:h-130 xl:h-152.5">
              <Image
                src={slider.image}
                alt={slider.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSlider;