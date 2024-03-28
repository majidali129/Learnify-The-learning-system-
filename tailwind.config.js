/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
     colors: {
      black: '#060606',
      white: {
        1: '#fdfcfa',
        2: '#f8f8fa',
        'main': '#fff'
      },
      secondary: {
        50: '#f7f9fa',
        100: '#e0e7ff',
        200: "#c7d2fe",
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#1e1b4b',
      },
      brand: {
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#052e16'
      },
      error: {
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
      },
      warning: {
        100: '#fef9c3',
        200: '#fef08a',
        300: '#fde047',
        400: '#facc15',
        500: '#eab308',
        600: '#ca8a04',
        700: '#a16207',
        800: '#854d0e',
        900: '#713f12',
      },
      dark: {
        // stone color for dark
        50: '#64748b',
        100: '#a8a29e',
        200: '#44403c',
        300: '#292524',
        400: '#1c1917',
        500: '#0c0a09',
      },

     }
    },
    plugins: [
      function ({addUtilities}) {
          const extendUnderline = {
              '.underline': {
                  'textDecoration': 'underline',
                  'text-decoration-color': '#F59E0B',
              },
          }
          addUtilities(extendUnderline)
      }
  ]
  },
  plugins: [require("tailwindcss-animate")],
}