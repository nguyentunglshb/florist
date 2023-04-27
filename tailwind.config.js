/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "linear-rectangle":
          "linear-gradient(159.09deg, #BCBCC2 11.28%, #898D93 91.76%)",
      },
    },
  },
  plugins: [],
};
