/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-bg': '#fdf2f8',      
        'text-main': '#0f172a',    
        'text-muted': '#475569',   
        'accent-pink': '#be185d',  
        'accent-purple': '#6b21a8',
        'accent-rose': '#be123c',  
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'], 
      },
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
