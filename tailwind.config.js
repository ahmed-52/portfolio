/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This includes all JavaScript/TypeScript and JSX/TSX files in your src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        'cabinet': ['CabinetGrotesk', 'sans-serif'],
        'general': ['GeneralSans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
