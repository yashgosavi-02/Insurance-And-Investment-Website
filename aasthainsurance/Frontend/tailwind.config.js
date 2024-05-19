const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        headerC: '#FCD656',
        bodyC: '#F1F1F1',
        footerC: '#F21209C',
        textC: '#23120B'
      },
      blur: {
        '90': '90%',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ]
}
