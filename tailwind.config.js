import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef4f0',
          100: '#fde3da',
          200: '#fbc4b5',
          300: '#f79c86',
          400: '#f46d4a',
          500: '#F2632B', // Primary from new logo
          600: '#d95020',
          700: '#b5411a',
          800: '#913418',
          900: '#772c17',
        },
        accent: {
          50: '#faf6f3',
          100: '#f0e5de',
          200: '#e0c9ba',
          300: '#cba68f',
          400: '#b37d5f',
          500: '#985C40', // Accent from new logo
          600: '#7d4a34',
          700: '#633b2a',
          800: '#4d2e22',
          900: '#3d261c',
        },
        background: {
          50: '#fafafa',
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
        onBackground: "#696969",
        secondary: "#dbff02",
        secondaryBackground: "#000000",
      },
      height: {
        'minus-header': 'calc(100vh - 4rem)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [

  ],
};
