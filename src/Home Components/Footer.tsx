"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import {
  FaArrowRight,
  FaCalendarCheck,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaGraduationCap,
  FaLinkedinIn,
  FaMapLocationDot,
  FaPhoneVolume,
  FaRegAddressCard,
  FaRegEye,
  FaSchool,
  FaTwitter,
  FaUserGraduate,
  FaYoutube,
} from "react-icons/fa6";

type QuickButton = {
  title: string;
  href: string;
  icon: ReactNode;
};

type FooterLink = {
  title: string;
  href: string;
};

type SocialLink = {
  title: string;
  href: string;
  icon: ReactNode;
};

const quickButtons: QuickButton[] = [
  {
    title: "Get Appointment",
    href: "/contact",
    icon: <FaCalendarCheck />,
  },
  {
    title: "Contact Us Today",
    href: "/contact",
    icon: <FaPhoneVolume />,
  },
  {
    title: "Take a School Tour",
    href: "/campuslife",
    icon: <FaMapLocationDot />,
  },
];

const importantLinks: FooterLink[] = [
  { title: "Dhaka Districts office", href: "#" },
  { title: "Dhaka Education Board", href: "#" },
  { title: "eTIF", href: "#" },
  {
    title: "Directorate of Secondary and Higher Education",
    href: "#",
  },
  { title: "Directorate of Primary Education", href: "#" },
  { title: "Ministry of Education", href: "#" },
];

const serviceLinks: FooterLink[] = [
  { title: "Admission", href: "/admission" },
  { title: "Result", href: "#" },
  { title: "Online Admission", href: "/admission" },
  { title: "Fees Payment", href: "#" },
];

const socialLinks: SocialLink[] = [
  {
    title: "Facebook",
    href: "#",
    icon: <FaFacebookF />,
  },
  {
    title: "Twitter",
    href: "#",
    icon: <FaTwitter />,
  },
  {
    title: "LinkedIn",
    href: "#",
    icon: <FaLinkedinIn />,
  },
  {
    title: "YouTube",
    href: "#",
    icon: <FaYoutube />,
  },
];

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mb-5">
      <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-page-secondary px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-color-secondary" />
        <p className="text-xs font-black uppercase tracking-[0.16em] text-secondary">
          Explore
        </p>
      </div>

      <h3 className="mt-3 text-xl font-black leading-tight text-primary sm:text-2xl">
        {children}
      </h3>

      <div className="mt-3 flex items-center gap-2">
        <span className="h-1 w-12 rounded-full bg-color-primary" />
        <span className="h-1 w-5 rounded-full bg-color-secondary" />
      </div>
    </div>
  );
};

const FooterNavLink = ({ item }: { item: FooterLink }) => {
  return (
    <Link
      href={item.href}
      className="group flex items-center justify-between gap-3 rounded-[14px] border border-transparent px-3 py-2.5 text-sm font-bold text-secondary transition-all duration-500 ease-out hover:translate-x-1 hover:border-soft hover:bg-color-primary hover:text-inverse hover:shadow-md"
    >
      <span className="flex items-start gap-2">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-color-secondary transition-all duration-500 group-hover:bg-page-primary" />
        <span>{item.title}</span>
      </span>

      <FaArrowRight className="shrink-0 text-xs opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100" />
    </Link>
  );
};

const ContactCard = ({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="group rounded-[18px] border border-soft bg-page-secondary p-4 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-color-primary hover:text-inverse hover:shadow-md">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-color-secondary text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
          {icon}
        </span>

        <div>
          <p className="text-sm font-black text-primary transition-colors duration-500 group-hover:text-inverse">
            {title}
          </p>

          <div className="mt-1 text-sm font-semibold leading-6 text-secondary transition-colors duration-500 group-hover:text-inverse">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({
  title,
  value,
  icon,
  accent = false,
}: {
  title: string;
  value: number;
  icon: ReactNode;
  accent?: boolean;
}) => {
  return (
    <div
      className={`group rounded-[20px] border border-soft p-4 text-center transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-color-primary hover:text-inverse hover:shadow-md ${
        accent ? "bg-color-secondary" : "bg-page-secondary"
      }`}
    >
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-[16px] bg-page-primary text-primary shadow-sm transition-all duration-500 group-hover:bg-color-secondary group-hover:text-primary">
        {icon}
      </div>

      <p className="mt-3 text-xs font-black uppercase tracking-wide text-secondary transition-colors duration-500 group-hover:text-inverse">
        {title}
      </p>

      <p className="mt-1 text-3xl font-black text-primary transition-colors duration-500 group-hover:text-inverse">
        {value}
      </p>
    </div>
  );
};

const Footer = () => {
  const [todayCount, setTodayCount] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    try {
      const savedVisits = localStorage.getItem("visitData");
      const visits: string[] = savedVisits ? JSON.parse(savedVisits) : [];

      const now = new Date();
      const today = now.toISOString().split("T")[0];

      const todayVisits = visits.filter((visit) => visit.startsWith(today));
      const updatedVisits = [...visits, now.toISOString()];

      setTodayCount(todayVisits.length + 1);
      setTotalCount(updatedVisits.length);

      localStorage.setItem("visitData", JSON.stringify(updatedVisits));
    } catch {
      const fallbackVisit = new Date().toISOString();

      setTodayCount(1);
      setTotalCount(1);
      localStorage.setItem("visitData", JSON.stringify([fallbackVisit]));
    }
  }, []);

  return (
    <footer className="relative overflow-hidden bg-page-secondary font-main text-primary">
      <div className="h-1 w-full bg-color-primary" />

      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-color-primary opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-color-secondary opacity-20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          {quickButtons.map((button) => (
            <Link
              key={button.title}
              href={button.href}
              className="group relative overflow-hidden rounded-[24px] border border-soft bg-page-primary p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-color-primary hover:text-inverse hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-color-secondary text-2xl text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-page-primary group-hover:text-brand-primary">
                  {button.icon}
                </span>

                <div>
                  <p className="text-base font-black text-primary transition-colors duration-500 group-hover:text-inverse sm:text-lg">
                    {button.title}
                  </p>

                  <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-secondary transition-colors duration-500 group-hover:text-inverse">
                    View details
                    <FaArrowRight className="text-xs transition-transform duration-500 group-hover:translate-x-1" />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-[30px] border border-soft bg-page-primary p-5 shadow-sm sm:p-7 lg:mt-10 lg:p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5">
            <div className="xl:col-span-1">
              <SectionTitle>About Us</SectionTitle>

              <div className="rounded-[22px] border border-soft bg-page-secondary p-5">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[18px] bg-color-secondary text-2xl text-primary">
                  <FaSchool />
                </div>

                <p className="text-justify text-sm font-semibold leading-7 text-secondary">
                  Viqarunnisa Noon School & College is an all-girls educational
                  institute in Baily Road, Dhaka, Bangladesh. It has 4 campuses
                  and around 25,000 students. Viqarunnisa Noon School & College
                  is one of the renowned educational institutes in Bangladesh.
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-[14px] bg-color-primary px-5 py-3 text-sm font-black text-inverse shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-color-secondary hover:text-primary hover:shadow-md"
                >
                  Contact us
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

            <div>
              <SectionTitle>Important Link</SectionTitle>

              <div className="rounded-[22px] border border-soft bg-page-secondary p-3">
                <div className="flex flex-col gap-1">
                  {importantLinks.map((item) => (
                    <FooterNavLink key={item.title} item={item} />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <SectionTitle>Services</SectionTitle>

              <div className="rounded-[22px] border border-soft bg-page-secondary p-3">
                <div className="flex flex-col gap-1">
                  {serviceLinks.map((item) => (
                    <FooterNavLink key={item.title} item={item} />
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-[22px] border border-soft bg-color-secondary p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-page-primary text-xl text-primary">
                    <FaUserGraduate />
                  </span>

                  <div>
                    <p className="text-lg font-black text-primary">
                      Student Support
                    </p>
                    <p className="mt-1 text-sm font-semibold text-secondary">
                      Fast access to admission and payment services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SectionTitle>Contact Info</SectionTitle>

              <div className="space-y-3">
                <ContactCard
                  icon={<FaPhoneVolume />}
                  title="Help Line Number (Mob)"
                >
                  <p>01867268422, 01866785183, 01866785184</p>
                </ContactCard>

                <ContactCard
                  icon={<FaRegAddressCard />}
                  title="Help Line Number (Tel)"
                >
                  <p>02-48317513, 02-48317519</p>
                  <p>02-58310500</p>
                </ContactCard>

                <ContactCard icon={<FaEnvelope />} title="Email Address">
                  <p className="break-words">info@vnsc.edu.bd</p>
                  <p className="break-words">vnsc_bd@yahoo.com</p>
                </ContactCard>
              </div>
            </div>

            <div>
              <SectionTitle>Visitor Counter</SectionTitle>

              <div className="grid grid-cols-2 gap-3">
                <StatCard
                  title="Today"
                  value={todayCount}
                  icon={<FaRegEye />}
                />

                <StatCard
                  title="Total"
                  value={totalCount}
                  icon={<FaGraduationCap />}
                  accent
                />
              </div>

              <div className="mt-6">
                <SectionTitle>Working Hours</SectionTitle>

                <div className="group rounded-[22px] border border-soft bg-page-secondary p-5 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-color-primary hover:text-inverse hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] bg-color-secondary text-primary transition-all duration-500 group-hover:bg-page-primary group-hover:text-brand-primary">
                      <FaClock />
                    </span>

                    <div className="text-sm font-semibold leading-7 text-secondary transition-colors duration-500 group-hover:text-inverse">
                      <p>
                        <span className="font-black text-primary transition-colors duration-500 group-hover:text-inverse">
                          Week Days:
                        </span>{" "}
                        9 AM - 5 PM
                      </p>
                      <p>
                        <span className="font-black text-primary transition-colors duration-500 group-hover:text-inverse">
                          Friday & Saturday:
                        </span>{" "}
                        Close
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <p className="mb-3 text-sm font-black text-primary">
                  Follow us on social media
                </p>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      aria-label={item.title}
                      className="flex h-11 w-11 items-center justify-center rounded-[16px] border border-soft bg-page-secondary text-primary shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-color-primary hover:text-inverse hover:shadow-md"
                    >
                      {item.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 rounded-[24px] border border-soft bg-color-primary px-5 py-4 text-center text-sm font-bold text-inverse shadow-sm md:flex-row">
          <p>
            © {new Date().getFullYear()} Viqarunnisa Noon School & College. All
            Rights Reserved.
          </p>

          <p>Designed with care for a modern school website.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;