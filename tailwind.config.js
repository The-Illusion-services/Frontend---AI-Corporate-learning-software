/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mobileBackground: "#161616",
        textGray: "#888888",
        inputBackground: "#222222",
        inputBorderColor: "#333333",
        PrimaryPurple: "#8E73EF",
        inputborderGreen: "#5FC381",
        customGreen: "rgb(52 199 89 / 0.15)", // #34C759 with 15% opacity
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "scrollbar-width": "none" /* Firefox */,
          "&::-webkit-scrollbar": {
            display: "none" /* Chrome, Safari */,
          },
        },
      });
    },
  ],
};
