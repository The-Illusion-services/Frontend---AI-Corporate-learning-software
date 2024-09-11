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
      },
    },
  },
  plugins: [],
};
