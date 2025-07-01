import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#fff5f0',
          100: '#ffe4d9',
          200: '#ffc4a9',
          300: '#ffa179',
          400: '#ff7c4e',
          500: '#fd6934', // your base
          600: '#e05129',
          700: '#be3c1f',
          800: '#9b2c16',
          900: '#771c0e',
        },
        background: {
          50:  '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        onPrimary: "#eef2f5",
        onBackground:"#696969",
        secondary: "#dbff02",
        secondaryBackground: "#000000",
      },
          height: {
      'minus-header': 'calc(100vh - 4rem)',
    },
    },
  },
  plugins: [

  ],
};
