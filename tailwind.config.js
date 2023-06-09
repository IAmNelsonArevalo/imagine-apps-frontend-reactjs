/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*{.ts,.tsx,.js,.jsx}"
  ],
  theme: {
    screens: {
      "min-tablet": {"min": "1024px"},
      "min-1300": {"min": "1300px"},
      "max-500": {"max": "500px"}
    },
    extend: {},
  },
  plugins: [],
})
