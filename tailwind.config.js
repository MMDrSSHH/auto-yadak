/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F5FDFF",
          100: "#E8F9FF",
          200: "#C7EDFC",
          300: "#A5DFFA",
          400: "#63BEF7",
          500: "#2196F3",
          600: "#1D7FDB",
          700: "#1261B5",
          800: "#0C4691",
          900: "#07306E",
          950: "#031B47",
        },
        secondary: {
          50: "#F9F0FA",
          100: "#F6E4F7",
          200: "#E6BEEB",
          300: "#D99BE0",
          400: "#B85AC7",
          500: "#9C27B0",
          600: "#85209E",
          700: "#691585",
          800: "#4C0E69",
          900: "#34084F",
          950: "#1D0333",
        },
        neutral: {
          50: "#F5F9FA",
          100: "#EDF3F5",
          200: "#D1DFE3",
          300: "#B8CBD1",
          400: "#89A5B0",
          500: "#607D8B",
          600: "#4F6E80",
          700: "#365469",
          800: "#233D54",
          900: "#142940",
          950: "#081629",
        },
        text: {
          50: "#F5F5F5",
          100: "#E8E8E8",
          200: "#C7C7C7",
          300: "#A6A6A6",
          400: "#636363",
          500: "#212121",
          600: "#1F1C1C",
          700: "#1A1313",
          800: "#140C0C",
          900: "#0F0707",
          950: "#0A0303",
        },
        background: {
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FCFCFC",
          400: "#FCFCFC",
          500: "#FAFAFA",
          600: "#E0CACA",
          700: "#BA8C8C",
          800: "#965A5A",
          900: "#703232",
          950: "#471515",
        },
        success: {
          200: "#CAEBD7",
          500: "#4CAF50",
          800: "#1B691E",
        },
        error: {
          200: "#FCE0CC",
          500: "#F44336",
          800: "#941A13",
        },
        warning: {
          200: "#FFEFBF",
          500: "#FF9800",
          800: "#994A00",
        },
        info: {
          200: "#BDF0FC",
          500: "#03A9F4",
          800: "#015294",
        },
      },
      fontFamily: {
        iranYekan: ["var(--font-iran-yekan)"],
      },
    },
  },
  plugins: [],
};
