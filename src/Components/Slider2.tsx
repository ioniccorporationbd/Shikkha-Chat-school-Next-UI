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
      <h2 className="text-2xl font-bold text-[#FF0000] sm:text-3xl">
        {title}
      </h2>
      <div className="mx-auto mt-2 h-[3px] w-20 rounded-full bg-[#FF0000] lg:mx-0" />
    </div>
  );
};

const MenuLineIcon = () => {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center">
      <span className="relative h-[2px] w-4 rounded-full bg-current before:absolute before:left-0 before:top-[-5px] before:h-[2px] before:w-4 before:rounded-full before:bg-current after:absolute after:left-0 after:top-[5px] after:h-[2px] after:w-4 after:rounded-full after:bg-current" />
    </span>
  );
};

const NoticeCard = ({ notice }: { notice: NoticeItem }) => {
  return (
    <Link
      href={notice.href}
      className="group flex min-h-[76px] gap-3 rounded-lg border border-[#f1f1f0] bg-white px-3 py-2 shadow-sm transition-all duration-300 ease-out hover:-translate-y-[1px] hover:border-red-100 hover:bg-red-50/50 hover:shadow-md sm:min-h-[82px]"
    >
      <div className="w-14 shrink-0 overflow-hidden rounded-md lg:w-20">
        <p className="bg-[#FF0000] py-1 text-center text-sm font-semibold text-white sm:text-base">
          {notice.day}
        </p>
        <p className="bg-[#f0f0f0] py-1 text-center text-base font-medium text-gray-700 sm:text-[18px]">
          {notice.month}
        </p>
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <p className="line-clamp-2 text-sm font-bold leading-6 text-black transition-colors duration-300 group-hover:text-[#FF0000] sm:text-base lg:text-lg">
          {notice.title}
        </p>

        <p className="mt-1 text-sm font-semibold italic text-[#FF0000] transition-all duration-300 group-hover:translate-x-1">
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
      <div className="rounded-2xl bg-white/90 p-3 transition-all duration-500 ease-out sm:p-4 lg:p-5">
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
                className={`rounded-lg border px-3 py-1 text-base font-semibold transition-all duration-300 ease-out hover:-translate-y-[1px] hover:border-[#FF0000] hover:bg-[#FF0000] hover:text-white hover:shadow-md sm:px-4 sm:text-lg ${
                  isActive
                    ? "border-[#FF0000] bg-[#FF0000] text-white shadow-sm"
                    : "border-black bg-[#F6F2F2] text-black"
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
          className="notice-board-swiper h-[285px] sm:h-[310px] lg:h-[370px]"
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
          className="mt-4 flex items-center justify-end gap-2 pr-2 text-sm font-semibold text-[#FF0000] transition-all duration-300 hover:translate-x-1 hover:text-red-700 sm:text-base"
        >
          <MenuLineIcon />
          <span>সকল নোটিশ দেখুন</span>
        </Link>
      </div>
    </section>
  );
};

export default Slider2;