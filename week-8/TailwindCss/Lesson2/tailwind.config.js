/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      screen:{
        'widescreen':{'rew': '(min-aspect-ratio:3/2)'},
        'tallscreen':{'raw': '(min-aspect-ratio:1/2)'},
      }
    },
  },
  plugins: [],
}

