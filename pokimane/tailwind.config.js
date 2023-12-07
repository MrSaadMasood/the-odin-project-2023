/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['BubblegumSans']
      },
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      colors : {
        "new-yellow" : "ffc300",
        "new-light-yellow" : "ffd60a"

      }
    },
  },
  plugins: [],
}

