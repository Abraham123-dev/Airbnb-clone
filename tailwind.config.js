/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#FF385C', // Airbnb Red
          hover: '#D9324E',
          teal: '#008489', // From "Contact Host" button in ref image
        },
        text: {
          primary: '#222222',
          secondary: '#717171',
          light: '#DDDDDD',
        },
        ui: {
          border: '#EBEBEB',
          bg: '#F7F7F7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Clean sans-serif matching the UI
      },
      boxShadow: {
        'card': '0 6px 16px rgba(0,0,0,0.12)',
        'floating': '0 8px 28px rgba(0,0,0,0.28)',
        'pill': '0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      }
    },
  },
  plugins: [],
}
