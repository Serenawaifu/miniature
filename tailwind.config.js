const retroPixel = require('./styles/themes/retroPixel').default;
const sakuraBlossom = require('./styles/themes/sakuraBlossom').default;
const cyberpunkNeon = require('./styles/themes/cyberpunkNeon').default;
const minimalLight = require('./styles/themes/minimalLight').default;
const cozyCafe = require('./styles/themes/cozyCafe').default;

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      ...retroPixel.theme.extend,
      ...sakuraBlossom.theme.extend,
      ...cyberpunkNeon.theme.extend,
      ...minimalLight.theme.extend,
      ...cozyCafe.theme.extend,
    },
  },
  plugins: [],
  safelist: [
    'retroPixel', 'sakuraBlossom', 'cyberpunkNeon', 'minimalLight', 'cozyCafe',
    // Add more as needed for theme-specific classes
  ],
};
