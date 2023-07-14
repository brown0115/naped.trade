/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': "#0D0C17",
        'black40': "rgba(0, 0, 0, 0.4)",
        'black-500': '#0E0D14',
        'blue': "#5600C3",
        "gray": "#b7b7b7",
        'grayDark': "#ABABAB",
        'grayDark2': '#BCBCBC',
        'white': "#FFFFFF",
        'blueDark': '#232133',
        'blueDark500': "#3E3A59",
        'blueDark-900': "#38354D",
        'purple': "#CE01C6",
        'white22': " rgba(255, 255, 255, 0.2)",
        'white3': "rgba(255, 255, 255, 0.03)",
        'white16': "rgba(255, 255, 255, 0.16)",
        'white50': "rgba(255, 255, 255, 0.5)",
        'white75': "rgba(255, 255, 255, 0.75)",
        'green': "#72F238",
        "pink": "#FD02BD",
        'red': "#FF0000",
      },
      backgroundImage: {
        'gradientMain': 'linear-gradient(45deg, #5600C3, #FD02BD)',
      },
      fontSize: {
        'xs': '12px',
        'sm': "14px",
        'base': "16px",
        'md': "18px",
        'lg': '20px',
        'xl': '24px',
      }
    },
  },
  plugins: [],
}

