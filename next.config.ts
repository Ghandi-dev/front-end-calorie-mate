import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "id"], // Bahasa yang didukung
    defaultLocale: "en", // Bahasa default
  },
};

export default nextConfig;
