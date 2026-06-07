@import "tailwindcss";
@import "swiper/css";
@import "swiper/css/pagination";

/* =========================
   Slider1 CSS
========================= */

.slider-one-swiper {
  width: 100%;
  height: 100%;
}

.slider-one-swiper .swiper-slide {
  width: 100%;
  overflow: hidden;
}

.slider-one-swiper .swiper-wrapper {
  transition-timing-function: ease-in-out;
}

.slider-one-swiper .swiper-pagination {
  bottom: 14px !important;
}

.slider-one-swiper .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background: #ffffff;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.slider-one-swiper .swiper-pagination-bullet-active {
  width: 26px;
  border-radius: 999px;
  background: #ff0000;
  opacity: 1;
}

/* =========================
   Notice Board Slider CSS
========================= */

.notice-board-swiper {
  width: 100%;
}

.notice-board-swiper .swiper-slide {
  height: auto;
}

.notice-board-swiper .swiper-wrapper {
  transition-timing-function: ease-in-out;
}

/* =========================
   Responsive CSS
========================= */

@media (max-width: 640px) {
  .slider-one-swiper .swiper-pagination {
    bottom: 10px !important;
  }

  .slider-one-swiper .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
  }

  .slider-one-swiper .swiper-pagination-bullet-active {
    width: 22px;
  }
}