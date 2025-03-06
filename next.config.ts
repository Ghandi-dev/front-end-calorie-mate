import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "id"], // Bahasa yang didukung
    defaultLocale: "id", // Bahasa default
  },
  images: {
    remotePatterns: [{ hostname: "www.masakapahariini.com", protocol: "https" }],
  },
};

export default nextConfig;
