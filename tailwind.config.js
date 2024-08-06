/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Test_Founders_Grotesk_Semibold: ['Test_Founders_Grotesk_X-Cond_SmBd'],
      Neue_Montreal: ["Neue_Montreal"],
      Candara: ["Candara"],
      Zera: ["DM Sans", "sans-serif"],
    }
  },
  plugins: [],
}

