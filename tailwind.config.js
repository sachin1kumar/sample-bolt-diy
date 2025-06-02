/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode based on class
  theme: {
    extend: {
      colors: {
        'primary': '#f9fafa',   // Very light gray, almost white, for the main background
        'secondary': '#e6e6e6', // Light gray for secondary backgrounds and elements
        'accent': '#384259',    // Dark blue-gray for highlights and interactive elements
        'text-primary': '#24292e', // Dark gray for primary text
        'text-secondary': '#57606a', // Medium gray for secondary text
        'border-color': '#d0d7de', // Light gray for borders
      },
      fontFamily: {
        'sans': ['"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', '"Helvetica Neue"', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
