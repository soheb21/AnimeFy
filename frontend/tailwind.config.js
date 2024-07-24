/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/main-bg.png')",
        'hero-dark-pattern': "url('./assets/dark-bg.jpg')",
      },
      boxShadow: {
        'custom-shadow': '0 2px 4px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        'custom-bg-light': "#ffffff",
        'custom-bg-dark': "#212121",
        'custom-text-header': "#eab308",
        'custom-text-primary': "#ffffff",
        'custom-text-dark-primary': "#212121",
        'custom-btn-primary-text': "#3a3a3a",
        'custom-btn-dark-primary-text': "#fdfdfd",
      }
    },
  },
  plugins: [],
}

