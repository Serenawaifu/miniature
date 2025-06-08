import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  theme: {
    extend: {
      fontFamily: {
        minimal: ['"Inter"', ...fontFamily.sans],
      },
      colors: {
        minimalBg: "#FFFFFF",
        minimalCard: "#F2F2F2",
        minimalAccent: "#B19CD9",
      },
    },
  },
};
