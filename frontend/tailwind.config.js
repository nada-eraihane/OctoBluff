/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#1a0f2e',
        'bg-card': '#2d1f4a',
        'cyan-primary': '#00D9FF',
        'pink-primary': '#FF006E',
        'purple-primary': '#8B4FFF',
        'text-gray': '#B8B8D1',
        'success': '#00FFA3',
        'warning': '#FFB800',
        'danger': '#FF006E',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'pulse-cyan': {
          '0%, 100%': { boxShadow: '0 0 5px #00D9FF, 0 0 10px #00D9FF' },
          '50%': { boxShadow: '0 0 2px #00D9FF, 0 0 5px #00D9FF' },
        },
        breathe: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        glitch: 'glitch 0.5s infinite',
        'pulse-cyan': 'pulse-cyan 2s infinite',
        breathe: 'breathe 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}