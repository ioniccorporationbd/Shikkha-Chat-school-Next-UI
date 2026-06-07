"use client";

import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

type CourseItem = {
  id: number;
  title: string;
  image: string;
  bgColor: string;
  subBgColor: string;
};

type ActivityItem = {
  id: number;
  title: string;
  image: string;
};

const courses: CourseItem[] = [
  {
    id: 1,
    title: "PSC",
    image: "/assets/Courses images/book-1.png",
    bgColor: "bg-[#687200]",
    subBgColor: "bg-[#DFE7AC]",
  },
  {
    id: 2,
    title: "Class 6",
    image: "/assets/Courses images/book-2.png",
    bgColor: "bg-[#59301F]",
    subBgColor: "bg-[#FEBA23]",
  },
  {
    id: 3,
    title: "Class 7",
    image: "/assets/Courses images/book-3.png",
    bgColor: "bg-[#C66783]",
    subBgColor: "bg-[#F6C0D2]",
  },
  {
    id: 4,
    title: "JSC",
    image: "/assets/Courses images/book-2.png",
    bgColor: "bg-[#40591F]",
    subBgColor: "bg-[#AF9842]",
  },
  {
    id: 5,
    title: "SSC",
    image: "/assets/Courses images/book-1.png",
    bgColor: "bg-[#8F2900]",
    subBgColor: "bg-[#FE9158]",
  },
  {
    id: 6,
    title: "HSC",
    image: "/assets/Courses images/book-3.png",
    bgColor: "bg-[#7A831F]",
    subBgColor: "bg-[#CDD69E]",
  },
];

const activities: ActivityItem[] = [
  {
    id: 1,
    title: "Cultural Department",
    image: "/assets/Courses images/Cultural .png",
  },
  {
    id: 2,
    title: "Ict Department",
    image: "/assets/Courses images/Ict Department.png",
  },
  {
    id: 3,
    title: "Student Development",
    image: "/assets/Courses images/Student Development.png",
  },
  {
    id: 4,
    title: "Higher Education",
    image: "/assets/Courses images/Higher Education.png",
  },
  {
    id: 5,
    title: "Blood Bank",
    image: "/assets/Courses images/Blood Bank.png",
  },
  {
    id: 6,
    title: "Our Achievement",
    image: "/assets/Courses images/Our Achievement.png",
  },
];

const SectionHeading = ({ title }: { title: string }) => {
  return (
    <div className="mb-5 text-center font-serif">
      <h2 className="text-[26px] font-bold leading-none text-[#FF0000] sm:text-[30px] lg:text-[34px]">
        {title}
      </h2>

      <div className="mx-auto mt-4 h-0.5 w-57.5 bg-[#FF0000]" />
    </div>
  );
};

const CourseCard = ({ course }: { course: CourseItem }) => {
  return (
    <div
      className={`group h-70 overflow-hidden rounded-xl ${course.bgColor} p-2 text-center font-serif transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
    >
      <h3 className="pt-5 text-[28px] font-bold leading-none text-white">
        {course.title}
      </h3>

      <button
        type="button"
        className="mt-5.5 rounded-lg border border-white px-3.5 py-0.75 text-[13px] font-bold leading-none text-white"
      >
        বিস্তারিত
      </button>

      <div
        className={`mt-5.5 flex h-36.25 w-full items-center justify-center rounded-[10px] ${course.subBgColor}`}
      >
        <Image
          src={course.image}
          alt={course.title}
          width={125}
          height={125}
          className="h-18.75 w-28.75 object-contain transition-transform duration-300 group-hover:scale-110"
          priority={course.id <= 4}
        />
      </div>
    </div>
  );
};

const ActivityCard = ({ activity }: { activity: ActivityItem }) => {
  return (
    <div className="group flex h-42.5 w-full max-w-67.5 flex-col items-center justify-center rounded-[10px] border border-[#EEEEEE] bg-white px-5 text-center font-serif shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(0,0,0,0.16)]">
      <Image
        src={activity.image}
        alt={activity.title}
        width={70}
        height={70}
        className="h-15.5 w-15.5 object-contain transition-transform duration-300 group-hover:scale-110"
      />

      <h3 className="mt-5.5 text-[19px] font-bold leading-tight text-black sm:text-[20px]">
        {activity.title}
      </h3>
    </div>
  );
};

const Courses = () => {
  return (
    <section className="w-full bg-white px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-295">
        <SectionHeading title="Our Courses for Students" />

        <Swiper
          freeMode={true}
          loop={true}
          speed={800}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 18,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 18,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 18,
            },
          }}
          modules={[Autoplay, FreeMode]}
          className="courses-swiper"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mx-auto mt-14.5 max-w-295">
        <SectionHeading title="Others Activities" />

        <div className="mt-5.5 flex flex-wrap justify-center gap-x-7.5 gap-y-7.5">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;