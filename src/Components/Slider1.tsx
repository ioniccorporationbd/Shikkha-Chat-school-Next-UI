"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
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
    image: "/assets/Slider1 images/building.jpg",
    alt: "School building",
  },
  {
    id: 2,
    image: "/assets/Slider1 images/anual.jpg",
    alt: "Annual program",
  },
  {
    id: 3,
    image: "/assets/Slider1 images/parod.jpg",
    alt: "School parade",
  },
];

const ArrowLeftIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 sm:h-6 sm:w-6"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15 5L8 12L15 19"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ArrowRightIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 sm:h-6 sm:w-6"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 5L16 12L9 19"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Slider1 = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrevious = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="relative w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#E2EDF7]">
      <div className="group relative w-full overflow-hidden rounded-2xl">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          speed={1000}
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
          className="slider-one-swiper w-full"
        >
          {sliders.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-[230px] w-full overflow-hidden bg-[#E2EDF7] sm:h-[320px] md:h-[420px] lg:h-[460px] xl:h-[500px]">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover object-center transition-transform duration-[2400ms] ease-out group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          onClick={handlePrevious}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#FF0000] shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#FF0000] hover:text-white active:scale-95 sm:left-5 sm:h-11 sm:w-11 lg:left-6 lg:h-12 lg:w-12"
        >
          <ArrowLeftIcon />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#FF0000] shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#FF0000] hover:text-white active:scale-95 sm:right-5 sm:h-11 sm:w-11 lg:right-6 lg:h-12 lg:w-12"
        >
          <ArrowRightIcon />
        </button>
      </div>
    </section>
  );
};

export default Slider1;