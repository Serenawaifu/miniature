import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  theme: {
    extend: {
      fontFamily: {
        cyber: ['"Orbitron"', ...fontFamily.sans],
      },
      colors: {
        cyberBg: "#0F0F0F",
        neonBlue: "#00AEFF",
        neonMagenta: "#FF2E88",
        neonTeal: "#00FFC8",
      },
      boxShadow: {
        neon: "0 0 16px 2px #00AEFF, 0 0 32px 4px #FF2E88",
      },
      backdropBlur: {
        md: "blur(12px)",
      },
    },
  },
};
