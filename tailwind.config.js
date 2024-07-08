/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
  
      },
      colors: {
        scheme: {
          purpleOne: '#ab86f4',
          purple: '#793cfb',
          purpleThree: '#b3bffa',
          white: '#ffffff',
          bgBlack: '#111112',
          darkerGrey: '#1c1c1e',
          darkGrey: '#262628',
          grey: '#eff8ff'
        },
        gradients: {
          greenOne: '#fdfc47',
          greenTwo: '#8dfd44',
          greenThree: '#24fe41'
        }
      },
    },
  },
  plugins: [],
};
