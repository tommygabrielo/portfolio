/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        exo2: ['Exo', 'Arial', 'Helvetica', 'sans-serif'],
        khand: ['Khand']
      },
      backgroundImage: {
        'primary': "linear-gradient(45deg, #790909, red)", //#b4b1b1 gris
      },
      colors: "red"
    },
  },
  plugins: [],
}
