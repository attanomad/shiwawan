import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C2FFCF",
        accent: {
          one: "#6F00E5",
          two: "#5056FF",
          three: "#A8F0B7",
        },
        text: {
          primary: "#00330B",
        },
      },
      fontSize: {
        hero: `${72 / 16}rem`,
        sectionTitleBg: `8.75rem`,
      },
      fontFamily: {
        en: ["var(--font-en)"],
        th: ["var(--font-th)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
