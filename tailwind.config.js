/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'human-bg': '#0a0a0a',      // Gerlogu-style Dark Black
        'human-border': '#333333',  // Subtle Industrial Borders
        'jojo-yellow': '#facc15',   // Comic Book Yellow
        'jojo-purple': '#6b21a8',   // Villain Purple
      },
      fontFamily: {
        'mono': ['Space Mono', 'monospace'], // Industrial Font (System default for now)
      },
      backgroundImage: {
        // The "Ben Day Dots" pattern for the comic section
        'comic-dots': "radial-gradient(circle, #000 2px, transparent 2.5px)", 
      }
    },
  },
  plugins: [],
}