/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        braintrain_blue: "#00A7E1",
        braintrain_navy: "#003459",
        braintrain_green: "#004A2F",
        braintrain_gray: "#F3F1F1",
      },
    },
  },
  plugins: [],
};
