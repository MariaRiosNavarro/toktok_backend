/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "base-100": "#FFFFFF", //white
          primary: "#FF4D67", //red
          secondary: "#9E9E9E", //lightGray
          accent: "#424242", //darkgray
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#FF4D67", //red
          secondary: "#9E9E9E", //lightGray
          accent: "#9E9E9E", //lightGray
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
