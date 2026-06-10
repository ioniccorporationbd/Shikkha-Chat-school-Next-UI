"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";

type SubLinkItem = {
  name: string;
  link: string;
};

type NavItem = {
  name: string;
  link: string;
  subLink?: SubLinkItem[];
};

const navList: NavItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About us",
    link: "/aboutus",
    subLink: [
      {
        name: "Message from Chairman",
        link: "/aboutus#message-from-chairman",
      },
      {
        name: "Message from Principal",
        link: "/aboutus#message-from-principal",
      },
      {
        name: "Governing Body",
        link: "/aboutus#governing-body",
      },
      {
        name: "Master Plan",
        link: "/aboutus#master-plan",
      },
      {
        name: "History",
        link: "/aboutus#history",
      },
      {
        name: "Vision and Objectives",
        link: "/aboutus#vision-and-objectives",
      },
      {
        name: "Infrastructure",
        link: "/aboutus#infrastructure",
      },
    ],
  },
  {
    name: "Academic",
    link: "/academic",
    subLink: [
      {
        name: "Code of Conducts",
        link: "/academic#code-of-conducts",
      },
      {
        name: "Guideline for Parents",
        link: "/academic#guideline-for-parents",
      },
      {
        name: "Dress Code",
        link: "/academic#dress-code",
      },
      {
        name: "HomeWork And Class Lecture Documents",
        link: "/academic#homework-and-class-lecture-documents",
      },
      {
        name: "Lesson Plan",
        link: "/academic#lesson-plan",
      },
      {
        name: "Academic calendar",
        link: "/academic#academic-calendar",
      },
      {
        name: "Syllabus",
        link: "/academic#syllabus",
      },
      {
        name: "Class Routine",
        link: "/academic#class-routine",
      },
      {
        name: "Co-curricular Activities",
        link: "/academic#co-curricular-activities",
      },
    ],
  },
  {
    name: "Information",
    link: "/information",
    subLink: [
      {
        name: "Notice Board",
        link: "/information#notice-board",
      },
      {
        name: "Payment Procedure",
        link: "/information#payment-procedure",
      },
      {
        name: "Facilities",
        link: "/information#facilities",
      },
      {
        name: "News and Events",
        link: "/information#news-and-events",
      },
      {
        name: "Our Achievements",
        link: "/information#our-achievements",
      },
      {
        name: "List of Holidays",
        link: "/information#list-of-holidays",
      },
      {
        name: "Teachers Info",
        link: "/information#teachers-info",
      },
      {
        name: "Student Info",
        link: "/information#student-info",
      },
      {
        name: "Policies & Guidelines",
        link: "/information#policies-and-guidelines",
      },
      {
        name: "Library",
        link: "/information#library",
      },
      {
        name: "Health and Environmental Awarness Info",
        link: "/information#health-and-environmental-awarness-info",
      },
    ],
  },
  {
    name: "Admission",
    link: "/admission",
    subLink: [
      {
        name: "Apply Now",
        link: "/admission#apply-now",
      },
      {
        name: "Fast Facts",
        link: "/admission#fast-facts",
      },
      {
        name: "Fees & Payment",
        link: "/admission#fees-and-payment",
      },
      {
        name: "Scholarships",
        link: "/admission#scholarships",
      },
      {
        name: "Transfer Procedures",
        link: "/admission#transfer-procedures",
      },
    ],
  },
  {
    name: "Campus Life",
    link: "/campuslife",
    subLink: [
      {
        name: "Photo Gallery",
        link: "/campuslife#photo-gallery",
      },
      {
        name: "Video Gallery",
        link: "/campuslife#video-gallery",
      },
    ],
  },
  {
    name: "Employment",
    link: "/employment",
    subLink: [
      {
        name: "At a Glance",
        link: "/employment#at-a-glance",
      },
      {
        name: "Employment Circulars",
        link: "/employment#employment-circulars",
      },
      {
        name: "Recruitment Exam Results",
        link: "/employment#recruitment-exam-results",
      },
    ],
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  {
    name: "স্বাধীনতা কর্নার",
    link: "/freedomcorner",
    subLink: [
      {
        name: "নোটিশ",
        link: "/freedomcorner#notices",
      },
      {
        name: "ছবির গ্যালারী",
        link: "/freedomcorner#photo-gallery",
      },
      {
        name: "ভিডিও গ্যালারী",
        link: "/freedomcorner#video-gallery",
      },
    ],
  },
];

const MenuIcon = () => {
  return <span className="block text-3xl leading-none">☰</span>;
};

const CloseIcon = () => {
  return <span className="block text-3xl leading-none">×</span>;
};

const DownIcon = ({ open = false }: { open?: boolean }) => {
  return (
    <span
      className={`inline-block text-[10px] text-primary transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      ▼
    </span>
  );
};

const Navber = () => {
  const pathname = usePathname();

  const [toggle, setToggle] = useState<boolean>(false);
  const [activeSubIndex, setActiveSubIndex] = useState<number | null>(null);

  const closeMobileMenu = () => {
    setToggle(false);
    setActiveSubIndex(null);
  };

  const handleSubToggle = (index: number) => {
    setActiveSubIndex((prev) => (prev === index ? null : index));
  };

  const handleMenuLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    closeMobileMenu();

    if (typeof window === "undefined") return;

    const targetUrl = new URL(link, window.location.origin);
    const currentPath = window.location.pathname;

    if (targetUrl.pathname === currentPath) {
      event.preventDefault();

      window.history.pushState(
        null,
        "",
        `${targetUrl.pathname}${targetUrl.hash}`
      );

      window.dispatchEvent(new Event("hashchange"));
    }
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#EBEBEB] shadow-sm">
      <div className="relative mx-auto flex h-15 max-w-7xl items-center justify-between gap-3 px-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={(event) => handleMenuLinkClick(event, "/")}
          className="shrink-0"
        >
          <Image
            src="/assets/images/logo-mane.png"
            alt="Logo"
            width={150}
            height={52}
            priority
            className="h-12.5 w-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
          />
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden flex-1 items-center justify-center gap-3 text-[13px] font-semibold xl:flex 2xl:gap-4 2xl:text-[14px]">
          {navList.map((item, index) => {
            const isActive =
              pathname === item.link ||
              (item.link !== "/" && pathname.startsWith(item.link));

            return (
              <div
                key={`${item.name}-${index}`}
                className={`group relative z-20 flex h-15 items-center gap-1 border-b-4 font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-primary"
                    : "border-transparent hover:border-primary"
                }`}
              >
                <Link
                  href={item.link}
                  onClick={(event) => handleMenuLinkClick(event, item.link)}
                  className="whitespace-nowrap text-black transition-colors duration-300 hover:text-primary"
                >
                  {item.name}
                </Link>

                {item.subLink && <DownIcon />}

                {item.subLink && (
                  <div className="invisible absolute left-0 top-full w-72 translate-y-3 rounded-b-md bg-white p-3 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex flex-col gap-1">
                      {item.subLink.map((subItem, subIndex) => (
                        <Link
                          key={`${subItem.name}-${subIndex}`}
                          href={subItem.link}
                          onClick={(event) =>
                            handleMenuLinkClick(event, subItem.link)
                          }
                          className="rounded-md px-2 py-2 text-sm text-black transition-all duration-300 hover:bg-primary/10 hover:pl-4 hover:text-primary"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop Parents Login */}
        <div className="hidden shrink-0 xl:block">
          <Link
            href="https://education.ionicerp.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md bg-primary px-5 py-2 text-base font-bold text-white transition-all duration-300 hover:-translate-y-px hover:bg-primary/90 hover:shadow-md"
          >
            Parents Login
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setToggle((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-primary transition-all duration-300 hover:bg-primary/10 xl:hidden"
          aria-label="Toggle menu"
        >
          {toggle ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-full w-full bg-white shadow-xl transition-all duration-300 xl:hidden ${
            toggle
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-4 opacity-0"
          }`}
        >
          <nav className="flex max-h-[82vh] flex-col gap-1 overflow-y-auto p-3">
            {navList.map((item, index) => {
              const hasSubMenu = Boolean(item.subLink?.length);
              const isOpen = activeSubIndex === index;
              const isActive =
                pathname === item.link ||
                (item.link !== "/" && pathname.startsWith(item.link));

              return (
                <div key={`${item.name}-${index}`} className="flex flex-col">
                  <div
                    className={`flex items-center justify-between rounded-md border-b border-primary transition-all duration-300 ${
                      isActive ? "bg-primary/10" : "bg-white"
                    }`}
                  >
                    <Link
                      href={item.link}
                      onClick={(event) =>
                        handleMenuLinkClick(event, item.link)
                      }
                      className="w-full px-3 py-3 font-semibold text-black transition-colors duration-300 hover:text-primary"
                    >
                      {item.name}
                    </Link>

                    {hasSubMenu && (
                      <button
                        type="button"
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          handleSubToggle(index);
                        }}
                        className="px-4 py-3 text-primary"
                        aria-label="Open submenu"
                      >
                        <DownIcon open={isOpen} />
                      </button>
                    )}
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.subLink && (
                      <div className="ml-4 flex flex-col gap-1 border-l border-primary py-2 pl-3">
                        {item.subLink.map((subItem, subIndex) => (
                          <Link
                            key={`${subItem.name}-${subIndex}`}
                            href={subItem.link}
                            onClick={(event) =>
                              handleMenuLinkClick(event, subItem.link)
                            }
                            className="rounded-md border-b border-dotted border-primary px-3 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-primary/10 hover:pl-5 hover:text-primary"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            <Link
              href="https://education.ionicerp.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-lg bg-primary px-4 py-3 text-center font-bold text-white transition-all duration-300 hover:bg-primary/90"
            >
              Parents Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navber;