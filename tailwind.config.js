/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'oswald':"'Oswald', sans-serif"
      },
      backgroundImage: {
        'bannerbg': "url('/src/assets/EduEventManager.png')"
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '100%': '100%',
        '16': '4rem',
      },
      screens: {
        'mobile-s':'320px',
        'mobile-m':'375px',
        'mobile-l':'425px',
        'tablet': '768px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
}

