/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typewriter: 'typewriter 4s steps(40, end) 1s 1 normal both',
        blink: 'blink 0.75s step-end '
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0', opacity: '0' },
          '100%': { width: '100%', opacity: '1' }
        },
        blink: {
          '0%': { borderColor: 'transparent' },
          '100%': { borderColor: 'white' }
        }
      }
    }
  },
  plugins: [],
}

