import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', ...fontFamily.sans],
      },
      colors: {
        retroGreen: "#00FF00",
        retroBlue: "#00BFFF",
        retroBlack: "#000000",
      },
      boxShadow: {
        pixel: "0 0 0 4px #00FF00, 0 0 0 8px #00BFFF",
      },
    },
  },
};
