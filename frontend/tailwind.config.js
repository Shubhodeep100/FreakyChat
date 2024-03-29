/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Madimi One"],
      txt:["Nunito"]
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  compilerOptions: {
    // ...
    baseUrl: ".",
    paths: {
      "@/*": ["./src/*"],
    },
    // ...
  },
};
