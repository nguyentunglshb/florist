/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#337A5B",
      primaryDark: "#285A43",
      defaultText: "#121212",
      white: "white",
      "grey.500": "#e9e9e9",
      "grey.300": "#f6f6f6",
      "grey.200": "#d9d9d9",
    },
    extend: {
      screens: {
        sm: "576px",
        // => @media (min-width: 576px) { ... }

        md: "960px",
        // => @media (min-width: 960px) { ... }

        lg: "1200px",
        // => @media (min-width: 1200px) { ... }
      },
      boxShadow: {
        present: "10px 10px 20px rgba(0, 0, 0, 0.02)",
      },
      backgroundImage: {
        "linear-rectangle":
          "linear-gradient(159.09deg, #BCBCC2 11.28%, #898D93 91.76%)",
      },
      aspectRatio: {
        "9/8": "9 / 8",
      },
    },
  },
  plugins: [],
};
