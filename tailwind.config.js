module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [],
}

const colors = require('tailwindcss/colors')
module.exports = {
  theme: {
    textColor: {
      'green': '#41B094',
      'grey': '#8B8B8B',
      'red' : '#B04141'
    },
    extends: {
      backgroundOpacity:{
        '10' : '0.1',
      },
      divideOpacity:{
        '10' : '0.1',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#1B1930',
      green: '#41B094',
      lightgrey: '#F6F8FA',
      grey: '#8B8B8B',
    }
  }
}