"use client";

import Image, { type StaticImageData } from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import slider1 from "../../public/assets/Slider1 images/building.jpg";
import slider2 from "../../public/assets/Slider1 images/anual.jpg";
import slider3 from "../../public/assets/Slider1 images/parod.jpg";

type SliderItem = {
  id: number;
  image: StaticImageData;
  alt: string;
};

const sliders: SliderItem[] = [
  {
    id: 1,
    image: slider1,
    alt: "School building",
  },
  {
    id: 2,
    image: slider2,
    alt: "Annual program",
  },
  {
    id: 3,
    image: slider3,
    alt: "School parade",
  },
];

const Slider1 = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <Swiper
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
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="slider-one-swiper w-full"
      >
        {sliders.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="group relative h-[230px] w-full overflow-hidden bg-gray-100 sm:h-[320px] md:h-[420px] lg:h-[500px] xl:h-[560px]">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center transition-transform duration-[2200ms] ease-out group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-90" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider1;