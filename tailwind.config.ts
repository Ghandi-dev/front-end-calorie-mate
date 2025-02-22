import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        caloriemate: {
          primary: "#2196F3", // Biru Primer (Energi & Fokus)
          secondary: "#4CAF50", // Hijau (Sehat)
          accent: "#E91E63", // Pink Kuat (Highlight / Aksen)
          neutral: "#2A2E37", // Abu-abu Gelap (Netral)
          "base-100": "#ffffff", // Putih (Bersih)
          info: "#03A9F4", // Biru Muda (Informasi)
          success: "#66BB6A", // Hijau Cerah (Sukses)
          warning: "#FFC107", // Kuning (Peringatan)
          error: "#D32F2F", // Merah (Error)
        },
      },
    ],
  },
} satisfies Config;
