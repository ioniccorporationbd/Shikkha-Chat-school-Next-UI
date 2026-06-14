"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type NoticeCategory = "ALL" | "PSC" | "JSC" | "SSC" | "HSC";

type NoticeItem = {
  id: number;
  day: string;
  month: string;
  title: string;
  category: Exclude<NoticeCategory, "ALL">;
  href: string;
};

const buttons: NoticeCategory[] = ["ALL", "PSC", "JSC", "SSC", "HSC"];

const notices: NoticeItem[] = [
  {
    id: 1,
    day: "05",
    month: "oct",
    title: "ফটোকপি মেশিন সরবরাহ কাজের দরপত্র",
    category: "PSC",
    href: "#",
  },
  {
    id: 2,
    day: "05",
    month: "oct",
    title: "পরীক্ষাসহ শ্রেণি কার্যক্রম বন্ধ প্রসঙ্গে",
    category: "JSC",
    href: "#",
  },
  {
    id: 3,
    day: "05",
    month: "oct",
    title: "বুদ্ধ পূর্ণিমার ছুটির নোটিশ",
    category: "SSC",
    href: "#",
  },
  {
    id: 4,
    day: "05",
    month: "oct",
    title: "রমজান মাসের সময়সূচী",
    category: "HSC",
    href: "#",
  },
  {
    id: 5,
    day: "05",
    month: "oct",
    title: "ফটোকপি মেশিন সরবরাহ কাজের দরপত্র",
    category: "SSC",
    href: "#",
  },
];

const SectionHeading = ({ title }: { title: string }) => {
  return (
    <div className="mb-5 text-center lg:text-left">
      <h2 className="text-2xl font-bold text-primary sm:text-3xl">
        {title}
      </h2>
      <div className="mx-auto mt-2 h-0.75 w-20 rounded-full bg-primary lg:mx-0" />
    </div>
  );
};

const MenuLineIcon = () => {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center">
      <span className="relative h-0.5 w-4 rounded-full bg-current before:absolute before:left-0 before:top-1.25 before:h-0.5 before:w-4 before:rounded-full before:bg-current after:absolute after:left-0 after:top-1.25 after:h-0.5 after:w-4 after:rounded-full after:bg-current" />
    </span>
  );
};

const NoticeCard = ({ notice }: { notice: NoticeItem }) => {
  return (
    <Link
      href={notice.href}
      className="group flex min-h-19 gap-3 rounded-lg border border-soft bg-bg-primary px-3 py-2 shadow-sm transition-all duration-300 ease-out hover:-translate-y-px hover:border-red-100 hover:bg-primary/10 hover:shadow-md sm:min-h-20.5"
    >
      <div className="w-14 shrink-0 overflow-hidden rounded-md lg:w-20">
        <p className="bg-primary py-1 text-center text-sm font-semibold text-inverse sm:text-base">
          {notice.day}
        </p>
        <p className="bg-bg-secondary py-1 text-center text-base font-medium text-secondary sm:text-[18px]">
          {notice.month}
        </p>
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <p className="line-clamp-2 text-sm font-bold leading-6 text-primary transition-colors duration-300 group-hover:text-primary sm:text-base lg:text-lg">
          {notice.title}
        </p>

        <p className="mt-1 text-sm font-semibold italic text-primary transition-all duration-300 group-hover:translate-x-1">
          View Notice
        </p>
      </div>
    </Link>
  );
};

const Slider2 = () => {
  const [selected, setSelected] = useState<NoticeCategory>("ALL");

  const filteredNotices = useMemo(() => {
    if (selected === "ALL") {
      return notices;
    }

    return notices.filter((notice) => notice.category === selected);
  }, [selected]);

  return (
    <section className="mx-2 lg:mx-0 lg:pl-10">
      <div className="rounded-2xl bg-bg-primary/90 p-3 transition-all duration-500 ease-out sm:p-4 lg:p-5">
        <SectionHeading title="Notice Board" />

        {/* Filter Buttons */}
        <div className="mb-7 flex flex-wrap gap-3 sm:gap-4 md:gap-7">
          {buttons.map((button) => {
            const isActive = selected === button;

            return (
              <button
                type="button"
                onClick={() => setSelected(button)}
                key={button}
                className={`rounded-lg border px-3 py-1 text-base font-semibold transition-all duration-300 ease-out hover:-translate-y-px hover:border-primary hover:bg-primary hover:text-inverse hover:shadow-md sm:px-4 sm:text-lg ${
                  isActive
                    ? "border-primary bg-primary text-inverse shadow-sm"
                    : "border-black bg-bg-secondary text-primary"
                }`}
              >
                {button}
              </button>
            );
          })}
        </div>

        {/* Notice Vertical Slider */}
        <Swiper
          direction="vertical"
          spaceBetween={10}
          slidesPerView={3}
          loop={filteredNotices.length > 3}
          speed={800}
          grabCursor={true}
          mousewheel={{
            forceToAxis: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay, Pagination, Mousewheel]}
          className="notice-board-swiper h-71.25 sm:h-77.5 lg:h-92.5"
        >
          {filteredNotices.map((notice) => (
            <SwiperSlide key={`${notice.id}-${selected}`}>
              <NoticeCard notice={notice} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All */}
        <Link
          href="#"
          className="mt-4 flex items-center justify-end gap-2 pr-2 text-sm font-semibold text-primary transition-all duration-300 hover:translate-x-1 hover:text-primary/80 sm:text-base"
        >
          <MenuLineIcon />
          <span>সকল নোটিশ দেখুন</span>
        </Link>
      </div>
    </section>
  );
};

export default Slider2;