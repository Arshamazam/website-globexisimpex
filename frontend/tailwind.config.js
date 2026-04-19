/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        'brand-navy': '#001D3D', // Darker, more premium navy
        'brand-gold': '#C5A059',
        'salt-pink': '#f7cbcc',
        'salt-deep': '#e28b8b',
      },
      animation: {
        'shimmer': 'shimmer 2s infinite linear',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-delayed': 'fadeIn 1s ease-out 0.5s forwards',
        'fade-in-more-delayed': 'fadeIn 1s ease-out 0.8s forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
