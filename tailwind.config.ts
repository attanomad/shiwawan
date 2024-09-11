import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

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
          four: "#C1FFCE",
          five: "#0C3315",
          six: "#FFE3C2",
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
  plugins: [
    function ({ addBase, theme }: PluginAPI) {
      addBase({
        ":root": {
          "--color-accent-four": theme("colors.accent.four"),
        },
      });
    },
  ],
};
export default config;
