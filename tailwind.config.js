/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        blueBg: "#DBEAFE",
        lightBlue: "#BFDBFE",
        blueLight: "#a5b4fc",
        blueMain: "#3B82F6",
        redMain: "#DC2626",
        yellowMain: "#FBBF24",
        greenMain: "#059669",
        indigoLight: "#C7D2FE",
        redCritical: "#7F1D1D",
        orangeMain: "#D97706",
        grayLight: "#D1D5DB",
        indigoDark: "#312E81",
        grayDark: "#6b7280",
        widgetText: "#172554",
      },
    },
  },
  plugins: [],
};
