import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["id", "en"], // Bahasa yang didukung
    defaultLocale: "id", // Bahasa default
    localeDetection: false,
  },
  images: {
    remotePatterns: [{ hostname: "www.masakapahariini.com", protocol: "https" }],
  },
};

export default nextConfig;
