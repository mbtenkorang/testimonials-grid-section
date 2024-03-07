/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow Semi Condensed", "sans-serif"],
      },
      colors: {
        prim: {
          violet: "hsl(263, 55%, 52%)",
          darkgrayblue: "hsl(217, 19%, 35%)",
          darkblackblue: "hsl(219, 29%, 14%)",
          white: "hsl(0, 0%, 100%)",
        },
        neut: {
          gray: "hsl(0, 0%, 81%)",
          grayblue: "hsl(210, 46%, 95%)",
        },
      },
    },
  },
  plugins: [],
};
