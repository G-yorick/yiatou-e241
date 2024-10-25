/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "main-button" : "#FF5722",
        "background" : "#FFE5AF",
        "background-f" : "#FFF"
      },
      fontFamily : {
        'klavika-bold' : ['klavika-bold','sans-serif'],
        'klavika-bold-italic' : ['klavika-bold-italic','sans-serif'],
        'klavika-light-italic' : ['klavika-light-italic','sans-serif'],
        'klavika-light' : ['klavika-light','sans-serif'],
        'klavika-medium-italic' : ['klavika-medium-italic','sans-serif'],
        'klavika-medium' : ['klavika-medium','sans-serif'],
        'klavika-medium-regular' : ['klavika-medium-regular','sans-serif'],
      }
    },
  },
  variants: {
    extend: {
      scrollbar: ['rounded']
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide')
  ],
  daisyui: {
    themes: [
      {
        light: {
        },
      },
    ]
  }
}
