import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Picsum Photos — used in gallery photo pool
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      // YouTube thumbnails — used in gallery video pool
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      // Unsplash — keep in case you switch back or use elsewhere
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;