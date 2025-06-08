import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  theme: {
    extend: {
      fontFamily: {
        sakura: ['"Merriweather"', ...fontFamily.serif],
      },
      colors: {
        sakuraPink: "#FFC0CB",
        sakuraWhite: "#FFF8FA",
      },
      boxShadow: {
        sakura: "0 4px 24px 0 #FFC0CB44",
      },
    },
  },
};
