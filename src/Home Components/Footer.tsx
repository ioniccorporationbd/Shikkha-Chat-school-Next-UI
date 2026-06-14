"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type QuickButton = {
  title: string;
  icon: string;
  alt: string;
  href: string;
};

type FooterLink = {
  title: string;
  href: string;
};

const quickButtons: QuickButton[] = [
  {
    title: "Get Appointment",
    icon: "/assets/images/email.png",
    alt: "Email icon",
    href: "/contact",
  },
  {
    title: "Contact Us Today",
    icon: "/assets/images/nap.png",
    alt: "Map icon",
    href: "/contact",
  },
  {
    title: "Take a School Tour",
    icon: "/assets/images/Telecom.png",
    alt: "Telecom icon",
    href: "/campuslife",
  },
];

const importantLinks: FooterLink[] = [
  { title: "Dhaka Districts office", href: "#" },
  { title: "Dhaka Education Board", href: "#" },
  { title: "eTIF", href: "#" },
  { title: "Directorate of Secondary and Higher Education", href: "#" },
  { title: "Directorate of Primary Education", href: "#" },
  { title: "Ministry of Education", href: "#" },
];

const serviceLinks: FooterLink[] = [
  { title: "Admission", href: "/admission" },
  { title: "Result", href: "#" },
  { title: "Online Admission", href: "/admission" },
  { title: "Fees Payment", href: "#" },
];

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6 fill-[var(--text-blue)]"
    aria-hidden="true"
  >
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6 fill-black"
    aria-hidden="true"
  >
    <path d="M18.9 3H22l-6.76 7.72L23.2 21h-6.23l-4.88-6.38L6.5 21H3.4l7.23-8.26L3 3h6.39l4.41 5.83L18.9 3Zm-1.09 16.19h1.72L8.45 4.72H6.6l11.21 14.47Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6 fill-[var(--text-blue)]"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28h-.01ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7 fill-primary"
    aria-hidden="true"
  >
    <path d="M21.58 7.19a2.72 2.72 0 0 0-1.91-1.92C17.98 4.82 12 4.82 12 4.82s-5.98 0-7.67.45a2.72 2.72 0 0 0-1.91 1.92C1.97 8.88 1.97 12.4 1.97 12.4s0 3.52.45 5.21a2.72 2.72 0 0 0 1.91 1.92c1.69.45 7.67.45 7.67.45s5.98 0 7.67-.45a2.72 2.72 0 0 0 1.91-1.92c.45-1.69.45-5.21.45-5.21s0-3.52-.45-5.21ZM9.98 15.62V9.18l5.2 3.22-5.2 3.22Z" />
  </svg>
);

const Footer = () => {
  const [todayCount, setTodayCount] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    try {
      const savedVisits = localStorage.getItem("visitData");
      const visits: string[] = savedVisits ? JSON.parse(savedVisits) : [];

      const now = new Date();
      const today = now.toISOString().split("T")[0];

      const visitsToday = visits.filter((visit) => visit.startsWith(today));
      const updatedVisits = [...visits, now.toISOString()];

      setTodayCount(visitsToday.length + 1);
      setTotalCount(updatedVisits.length);

      localStorage.setItem("visitData", JSON.stringify(updatedVisits));
    } catch {
      setTodayCount(1);
      setTotalCount(1);
      localStorage.setItem("visitData", JSON.stringify([new Date().toISOString()]));
    }
  }, []);

  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-red-100 to-red-400 text-primary">
      <div className="absolute inset-0 bg-bg-primary/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Upper Buttons */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {quickButtons.map((button) => (
            <Link
              key={button.title}
              href={button.href}
              className="group flex items-center justify-center gap-4 rounded-xl border-2 border-primary bg-bg-primary px-5 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-lg"
            >
              <Image
                src={button.icon}
                alt={button.alt}
                width={36}
                height={36}
                className="h-9 w-9 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              />
              <span className="text-lg font-semibold text-primary transition-colors duration-300 group-hover:text-inverse sm:text-xl">
                {button.title}
              </span>
            </Link>
          ))}
        </div>

        <div className="my-10 h-px w-full bg-primary/70" />

        {/* Footer Grid */}
        <div className="grid grid-cols-1 gap-8 text-sm sm:grid-cols-2 lg:grid-cols-5 lg:gap-7">
          {/* About Us */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold">About Us</h3>
            <div className="mb-5 mt-2 h-px w-4/5 bg-primary" />

            <p className="text-justify text-sm leading-6">
              Viqarunnisa Noon School & College is an all-girls educational
              institute in Baily Road, Dhaka, Bangladesh. It has 4 campuses and
              around 25,000 students. Viqarunnisa Noon School & College is one
              of the renowned educational institutes in Bangladesh.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-xl border border-primary bg-bg-primary px-4 py-2 text-lg font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-inverse hover:shadow-md"
            >
              Contact us
            </Link>
          </div>

          {/* Important Link */}
          <div>
            <h3 className="text-2xl font-semibold">Important Link</h3>
            <div className="mb-5 mt-2 h-px w-full bg-primary" />

            <div className="flex flex-col gap-2">
              {importantLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="leading-5 transition-all duration-300 hover:translate-x-1 hover:text-primary"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-semibold">Services</h3>
            <div className="mb-5 mt-2 h-px w-3/4 bg-primary" />

            <div className="flex flex-col gap-2">
              {serviceLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="transition-all duration-300 hover:translate-x-1 hover:text-primary"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold">Contact Info</h3>
            <div className="mb-5 mt-2 h-px w-full bg-primary" />

            <div className="space-y-2 leading-5">
              <p className="font-bold">Help Line Number (Mob)</p>
              <p>01867268422, 01866785183, 01866785184</p>

              <p className="font-bold">Help Line Number (Tel)</p>
              <p>02-48317513, 02-48317519</p>
              <p>02-58310500</p>

              <p className="font-bold">Email Address</p>
              <p className="wrap-break-word">info@vnsc.edu.bd, vnsc_bd@yahoo.com</p>
            </div>

            <h3 className="pt-6 text-2xl font-semibold">Working Hours</h3>
            <div className="mb-5 mt-2 h-px w-full bg-primary" />

            <div className="space-y-2">
              <p>Week Days: 9 AM - 5 PM</p>
              <p className="font-bold">Friday & Saturday : Close</p>
            </div>
          </div>

          {/* Visitor Counter */}
          <div>
            <h3 className="text-2xl font-semibold">Visitor Counter</h3>
            <div className="mb-5 mt-2 h-px w-full bg-primary" />

            <div className="space-y-3">
              <div className="flex flex-col items-center justify-center rounded-lg border border-primary bg-bg-primary p-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="text-base font-bold">Today Total Visitors</p>
                <p className="text-xl font-bold text-primary">
                  {todayCount}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center rounded-lg border border-primary bg-bg-primary p-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="text-base font-bold">Grand Total</p>
                <p className="text-xl font-bold text-primary">
                  {totalCount}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8 h-px w-full bg-primary/80" />

        {/* Social Links */}
        <div className="flex items-center justify-center gap-5">
          <Link
            href="#"
            aria-label="Facebook"
            className="transition-transform duration-300 hover:-translate-y-1"
          >
            <FacebookIcon />
          </Link>

          <Link
            href="#"
            aria-label="Twitter"
            className="transition-transform duration-300 hover:-translate-y-1"
          >
            <TwitterIcon />
          </Link>

          <Link
            href="#"
            aria-label="LinkedIn"
            className="transition-transform duration-300 hover:-translate-y-1"
          >
            <LinkedinIcon />
          </Link>

          <Link
            href="#"
            aria-label="YouTube"
            className="transition-transform duration-300 hover:-translate-y-1"
          >
            <YoutubeIcon />
          </Link>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-center gap-2 pt-5 text-center">
          <p className="text-sm">
            © Copyright Shikkha Chat 2009, All Rights Reserved
          </p>

          <Link
            href="https://shikkhachat.com"
            target="_blank"
            rel="noopener noreferrer"
            className="pb-2 text-sm transition-colors duration-300 hover:text-primary"
          >
            Developed By IONIC Corporation
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;