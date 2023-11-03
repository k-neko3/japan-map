import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // default
        //'sm': '640px',
        //'md': '768px',
        //'lg': '1024px',
        //'xl': '1280px',
        //'2xl': '1536px',
      },
      gridTemplateRows: {
        "15": "repeat(15, minmax(0, 1fr))",
      },
      gridRowStart: {
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
      },
      gridRowEnd: {
        "8": "8",
        "9": "9",
        "10": "10",
        "11": "11",
        "12": "12",
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
      },
      gridTemplateColumns: {
        "14": "repeat(14, minmax(0, 1fr))",
      },
      gridColumnStart: {
        "14": "14",
        "15": "15",
        "16": "16",
      },
      gridColumnEnd: {
        "14": "14",
        "15": "15",
        "16": "16",
      },
    },
  },
  plugins: [],
};
export default config;
