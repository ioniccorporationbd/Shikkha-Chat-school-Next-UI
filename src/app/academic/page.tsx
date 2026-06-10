"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import AcademicCalendar from "@/Academic components/AcademicCalendar";
import ClassRoutine from "@/Academic components/ClassRoutine";
import CoCurricularActivities from "@/Academic components/CoCurricularActivities";
import CodeOfConducts from "@/Academic components/CodeOfConducts";
import DressCode from "@/Academic components/DressCode";
import GuidelineForParents from "@/Academic components/GuidelineForParents";
import HomeWorkAndClassLectureDocuments from "@/Academic components/HomeWorkAndClassLectureDocuments";
import LessonPlan from "@/Academic components/LessonPlan";
import Syllabus from "@/Academic components/Syllabus";

type TopicKey =
  | "Code of Conducts"
  | "Guideline for Parents"
  | "Dress Code"
  | "HomeWork And Class Lecture Documents"
  | "Lesson Plan"
  | "Academic Calendar"
  | "Syllabus"
  | "Class Routine"
  | "Co-curricular Activities";

type TopicItem = {
  name: TopicKey;
  slug: string;
};

const topics: TopicItem[] = [
  { name: "Code of Conducts", slug: "code-of-conducts" },
  { name: "Guideline for Parents", slug: "guideline-for-parents" },
  { name: "Dress Code", slug: "dress-code" },
  {
    name: "HomeWork And Class Lecture Documents",
    slug: "homework-and-class-lecture-documents",
  },
  { name: "Lesson Plan", slug: "lesson-plan" },
  { name: "Academic Calendar", slug: "academic-calendar" },
  { name: "Syllabus", slug: "syllabus" },
  { name: "Class Routine", slug: "class-routine" },
  { name: "Co-curricular Activities", slug: "co-curricular-activities" },
];

const DoubleArrowIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 5L14 12L7 19"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5L19 12L12 19"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const CheckSquareIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 11.5L11.2 13.7L15.8 8.6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4H20V20H4V4Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const getTopicFromHash = (): TopicKey => {
  if (typeof window === "undefined") {
    return "Code of Conducts";
  }

  const hash = window.location.hash.replace("#", "");
  const matched = topics.find((topic) => topic.slug === hash);

  return matched?.name ?? "Code of Conducts";
};

const AcademicPage = () => {
  const [selected, setSelected] = useState<TopicKey>("Code of Conducts");

  useEffect(() => {
    setSelected(getTopicFromHash());

    const handleUrlChange = () => {
      setSelected(getTopicFromHash());
    };

    window.addEventListener("hashchange", handleUrlChange);
    window.addEventListener("popstate", handleUrlChange);

    return () => {
      window.removeEventListener("hashchange", handleUrlChange);
      window.removeEventListener("popstate", handleUrlChange);
    };
  }, []);

  const selectedTopic = useMemo(() => {
    return topics.find((topic) => topic.name === selected) ?? topics[0];
  }, [selected]);

  const handleSelect = (topic: TopicItem) => {
    setSelected(topic.name);
  };

  const renderContent = () => {
    switch (selected) {
      case "Code of Conducts":
        return <CodeOfConducts />;

      case "Guideline for Parents":
        return <GuidelineForParents />;

      case "Dress Code":
        return <DressCode />;

      case "HomeWork And Class Lecture Documents":
        return <HomeWorkAndClassLectureDocuments />;

      case "Lesson Plan":
        return <LessonPlan />;

      case "Academic Calendar":
        return <AcademicCalendar />;

      case "Syllabus":
        return <Syllabus />;

      case "Class Routine":
        return <ClassRoutine />;

      case "Co-curricular Activities":
        return <CoCurricularActivities />;

      default:
        return <CodeOfConducts />;
    }
  };

  return (
    <main className="min-h-screen bg-secondary">
      <section className="bg-white py-10 shadow-sm">
        <div className="mx-auto max-w-315 px-4 text-center text-2xl font-bold text-black lg:text-left">
          {selectedTopic.name}
          <div className="mx-auto mt-3 h-0.75 w-20 rounded-full bg-primary lg:mx-0" />
        </div>
      </section>

      <section className="mx-auto grid max-w-315 grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-6 lg:gap-10">
        <aside className="lg:col-span-2">
          <div className="sticky top-20">
            <div className="mb-5 flex items-center justify-center gap-2 rounded-lg bg-white p-4 text-xl font-semibold text-black shadow-sm">
              <CheckSquareIcon />
              <p>Related Topics</p>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              {topics.map((topic) => {
                const isActive = selected === topic.name;

                return (
                  <Link
                    key={topic.name}
                    href={`/academic#${topic.slug}`}
                    onClick={() => handleSelect(topic)}
                    className={`flex items-center gap-2 border-b border-secondary p-4 text-sm font-semibold transition-all duration-300 sm:text-base ${
                      isActive
                        ? "bg-primary text-white"
                        : "bg-white text-black hover:bg-secondary hover:pl-6 hover:text-primary"
                    }`}
                  >
                    <DoubleArrowIcon />
                    <span>{topic.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </aside>

        <section className="lg:col-span-4">{renderContent()}</section>
      </section>
    </main>
  );
};

export default AcademicPage;