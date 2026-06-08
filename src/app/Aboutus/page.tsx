"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Message_From_Chairman from "@/Aboutus components/message-from-chairman";
import MessageFromPrincipal from "@/Aboutus components/MessageFromPrincipal";
import GoverningBody from "@/Aboutus components/GoverningBody";
import MasterPlan from "@/Aboutus components/MasterPlan";
import History from "@/Aboutus components/History";
import VisionAndObjectives from "@/Aboutus components/VisionAndObjectives";
import Infrastructure from "@/Aboutus components/Infrastructure";

type TopicKey =
  | "Message from Chairman"
  | "Message from Principal"
  | "Governing Body"
  | "Master Plan"
  | "History"
  | "Vision and Objectives"
  | "Infrastructure";

type TopicItem = {
  name: TopicKey;
  slug: string;
};

const topics: TopicItem[] = [
  { name: "Message from Chairman", slug: "message-from-chairman" },
  { name: "Message from Principal", slug: "message-from-principal" },
  { name: "Governing Body", slug: "governing-body" },
  { name: "Master Plan", slug: "master-plan" },
  { name: "History", slug: "history" },
  { name: "Vision and Objectives", slug: "vision-and-objectives" },
  { name: "Infrastructure", slug: "infrastructure" },
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
    return "Message from Chairman";
  }

  const hash = window.location.hash.replace("#", "");
  const matched = topics.find((topic) => topic.slug === hash);

  return matched?.name ?? "Message from Chairman";
};

const AboutUsPage = () => {
  const [selected, setSelected] = useState<TopicKey>("Message from Chairman");

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
      case "Message from Chairman":
        return <Message_From_Chairman />;
      case "Message from Principal":
        return <MessageFromPrincipal />;
      case "Governing Body":
        return <GoverningBody />;
      case "Master Plan":
        return <MasterPlan />;
      case "History":
        return <History />;
      case "Vision and Objectives":
        return <VisionAndObjectives />;
      case "Infrastructure":
        return <Infrastructure />;
      default:
        return <Message_From_Chairman />;
    }
  };

  return (
    <main className="min-h-screen bg-[#E2EDF7]">
      <section className="bg-white py-10 shadow-sm">
        <div className="mx-auto max-w-[1260px] px-4 text-center text-2xl font-bold text-black lg:text-left">
          {selectedTopic.name}
          <div className="mx-auto mt-3 h-[3px] w-20 rounded-full bg-[#FF0000] lg:mx-0" />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1260px] grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-6 lg:gap-10">
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
                    href={`/aboutus#${topic.slug}`}
                    onClick={() => handleSelect(topic)}
                    className={`flex items-center gap-2 border-b border-[#E2EDF7] p-4 text-sm font-semibold transition-all duration-300 sm:text-base ${
                      isActive
                        ? "bg-[#FF0000] text-white"
                        : "bg-white text-black hover:bg-[#E2EDF7] hover:pl-6 hover:text-[#FF0000]"
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

export default AboutUsPage;
