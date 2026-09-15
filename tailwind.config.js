/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-archivo)', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['var(--font-jbmono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        paper: "#f7f6f4",
        ink: "#17181a",
        muted: "#5f636a",
        "muted-dark": "#5a5e65",
        card: "#ffffff",
        tint: "#f1eee9",
        "tint-2": "#f2f0ec",
        chip: "rgba(0,0,0,0.05)",
        "chip-text": "#3f434a",
        green: "oklch(0.55 0.13 160)",
        amber: "oklch(0.55 0.13 60)",
      },
      keyframes: {
        reveal: {
          from: { opacity: 0, transform: "translateY(14px)" },
          to: { opacity: 1, transform: "none" },
        },
      },
      animation: {
        reveal: "reveal 620ms cubic-bezier(0.2,0.7,0.3,1) both",
      },
    },
  },
  plugins: [],
}
