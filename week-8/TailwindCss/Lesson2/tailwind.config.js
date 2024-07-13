/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/js/*.js"],
  theme: {
    extend: {
      screen:{
        'widescreen':{'rew': '(min-aspect-ratio:3/2)'},
        'tallscreen':{'raw': '(max-aspect-ratio:1/2)'},
      },
      keyframs:{
        'open-menu':{
          '0%':{transform:'scaleY(0)'},
          '80%':{transform:'scaleY(1.2)'},
          '100%':{transform:'scaleY(1)'},
        },
      },
      animaiton:{
        'open-menu':'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

