/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sand: { 50:"#FFF7ED", 100:"#FDEFD9" },
        clay: { 100:"#F4E7DA", 200:"#E9D8C9" },
        leaf: { 600:"#2F7A62", 700:"#296A55" },
        surf: { 700:"#145E74", 800:"#0E4F62" },
        ink: { 900:"#111112", 700:"#2A2E30", 500:"#667074" }
      },
      boxShadow: { soft: "0 16px 40px -20px rgba(0,0,0,.25)" },
      fontFamily: { sans: ["Inter","ui-sans-serif","system-ui","Segoe UI","Roboto","Helvetica","Arial"] }
    },
  },
  plugins: [],
};
