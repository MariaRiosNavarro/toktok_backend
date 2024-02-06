/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flipHorizontal: {
          "50%": { transform: "rotateY(180deg)" },
        },
        explosion: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        moveDrop1: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(130px, -100px)" },
        },
        moveDrop2: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-50px, -150px)" },
        },
        moveDrop3: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-125px, -100px)" },
        },
        moveDrop4: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(40px, -180px)" },
        },
        moveDrop5: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-100px, 0px)" },
        },
        moveDrop6: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-120px, 100px)" },
        },
        moveDrop7: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(0px, 135px)" },
        },
        moveDrop8: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(130px, 120px)" },
        },
        transparent: {
          "0%": { opacity: 1 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0.2 },
        },
      },
      animation: {
        explosionAni: "explosion 0.5s 1",
        horizontal_flip: "flipHorizontal 3s 1",
        drop_animation1: "moveDrop1 1s ease-in-out forwards",
        spin_slow: "spin 3s linear infinite",
        transformSoft: "transparent 2s ease-in-out forwards",
        drop_animation2: "moveDrop2 1s ease-in-out forwards",
        drop_animation3: "moveDrop3 1s ease-in-out forwards",
        drop_animation4: "moveDrop4 1s ease-in-out forwards",
        drop_animation5: "moveDrop5 1s ease-in-out forwards",
        drop_animation6: "moveDrop6 1s ease-in-out forwards",
        drop_animation7: "moveDrop7 1s ease-in-out forwards",
        drop_animation8: "moveDrop8 1s ease-in-out forwards",
      },
    },
  },
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
