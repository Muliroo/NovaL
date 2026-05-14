/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      boxShadow: {
        luxury: "0 24px 80px rgba(0, 191, 234, 0.16)",
        "luxury-dark": "0 24px 80px rgba(65, 105, 225, 0.18)"
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },
  plugins: []
};
