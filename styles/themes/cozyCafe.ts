import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  theme: {
    extend: {
      fontFamily: {
        cafe: ['"Georgia"', ...fontFamily.serif],
      },
      colors: {
        cafeBrown: "#4E342E",
        cafeCream: "#FFF0E1",
        cafeOrange: "#FF8A65",
      },
      backgroundImage: {
        beans: "url('/cafe-beans.png')",
      },
    },
  },
};
