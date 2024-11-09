/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "4sm": "361px",
        "3sm": "390px",
        "2.5sm": "415px",
        "2sm": "426px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "1xl": "1350px",
        "2xl": "1440px",
        "3xl": "1536px",
        "4xl": "1921px",
      },
    },
  },
  plugins: [],
};
