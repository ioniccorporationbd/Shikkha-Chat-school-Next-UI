import type { Metadata } from "next";
import "./globals.css";

import SiteHeader from "./SiteHeader";
import Footer from "@/Home Components/Footer";

import { Ubuntu, Geist_Mono, Noto_Serif_Bengali } from "next/font/google";

export const metadata: Metadata = {
  title: "Shikkha Chat",
  description: "Shikkha Chat Website",
};

const englishFont = Ubuntu({
  variable: "--font-english",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const banglaFont = Noto_Serif_Bengali({
  variable: "--font-bangla",
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const monoFont = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${englishFont.variable} ${banglaFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <SiteHeader />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}