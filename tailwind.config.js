/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage : {
        'hero-banner' : "url('/banner.jpg')",
      }
    },
  },
  plugins: [],
}

