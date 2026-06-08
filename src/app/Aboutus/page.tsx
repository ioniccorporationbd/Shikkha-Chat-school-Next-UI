"use client";

import Message_From_Chairman from "@/Aboutus components/message-from-chairman";
import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";

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

const ContentCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="animate-[fadeIn_0.45s_ease-out] rounded-xl bg-white p-5 shadow-sm transition-all duration-500 hover:shadow-lg sm:p-7 lg:p-8">
      {children}
    </div>
  );
};

const ContentHeading = ({ title }: { title: string }) => {
  return (
    <div className="mb-5">
      <h2 className="text-xl font-bold text-[#FF0000] sm:text-2xl">
        {title}
      </h2>
      <div className="mt-2 h-[3px] w-20 rounded-full bg-[#FF0000]" />
    </div>
  );
};

const ChairmanMessage = () => {
  return (
    <ContentCard>
      <ContentHeading title="Message from Chairman" />
<Message_From_Chairman/>
    </ContentCard>
  );
};

const PrincipalMessage = () => {
  return (
    <ContentCard>
      <ContentHeading title="Message from Principal" />

      <p className="text-justify text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
        Our institution is committed to developing students academically,
        morally, and socially. We believe education should build confidence,
        leadership, discipline, and responsibility.
      </p>

      <div className="mt-6 rounded-lg bg-[#E2EDF7] p-4">
        <p className="font-bold text-[#FF0000]">Mazeda Begum</p>
        <p className="text-sm text-gray-700">
          Principal, Viqarunnisa Noon School & College
        </p>
      </div>
    </ContentCard>
  );
};

const GoverningBodyPage = () => {
  const members = [
    "Chairman",
    "Principal",
    "Teacher Representative",
    "Guardian Representative",
    "Education Board Representative",
    "Administrative Member",
  ];

  return (
    <ContentCard>
      <ContentHeading title="Governing Body" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {members.map((member) => (
          <div
            key={member}
            className="rounded-lg bg-[#E2EDF7] p-4 text-center font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#FF0000] hover:shadow-md"
          >
            {member}
          </div>
        ))}
      </div>
    </ContentCard>
  );
};

const MasterPlan = () => {
  return (
    <ContentCard>
      <ContentHeading title="Master Plan" />

      <p className="text-justify text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
        Our master plan focuses on smart classrooms, digital education,
        laboratory development, library modernization, co-curricular activities,
        student safety, and technology-based academic management.
      </p>
    </ContentCard>
  );
};

const History = () => {
  return (
    <ContentCard>
      <ContentHeading title="History" />

      <p className="text-justify text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
        Viqarunnisa Noon School & College has a proud history of academic
        excellence, discipline, cultural achievement, and contribution to
        national education.
      </p>
    </ContentCard>
  );
};

const VisionObjectives = () => {
  return (
    <ContentCard>
      <ContentHeading title="Vision and Objectives" />

      <ul className="space-y-3 text-sm leading-7 text-gray-700 sm:text-base">
        <li>• Ensure quality education for every student.</li>
        <li>• Build disciplined, moral, and responsible citizens.</li>
        <li>• Use technology for modern academic management.</li>
        <li>• Support creativity, leadership, and co-curricular activities.</li>
      </ul>
    </ContentCard>
  );
};

const Infrastructure = () => {
  return (
    <ContentCard>
      <ContentHeading title="Infrastructure" />

      <p className="text-justify text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
        The institution has academic buildings, classrooms, laboratories,
        library facilities, administrative offices, and student support services
        to create a strong learning environment.
      </p>
    </ContentCard>
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
        return <ChairmanMessage />;
      case "Message from Principal":
        return <PrincipalMessage />;
      case "Governing Body":
        return <GoverningBodyPage />;
      case "Master Plan":
        return <MasterPlan />;
      case "History":
        return <History />;
      case "Vision and Objectives":
        return <VisionObjectives />;
      case "Infrastructure":
        return <Infrastructure />;
      default:
        return <ChairmanMessage />;
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
        {/* Left Sidebar */}
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

        {/* Right Content */}
        <section className="lg:col-span-4">{renderContent()}</section>
      </section>
    </main>
  );
};

export default AboutUsPage;