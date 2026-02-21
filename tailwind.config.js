/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          card: "var(--bg-card)",
          "card-hover": "var(--bg-card-hover)",
        },
        gold: {
          primary: "var(--gold-primary)",
          light: "var(--gold-light)",
          dark: "var(--gold-dark)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        border: {
          subtle: "var(--border-subtle)",
          default: "var(--border-default)",
          active: "var(--border-active)",
        },
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "20px",
        xl: "32px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.4)",
        gold: "0 0 40px rgba(201, 169, 110, 0.15)",
        "gold-hover": "0 0 60px rgba(201, 169, 110, 0.3)",
      }
    },
  },
  plugins: [],
};
