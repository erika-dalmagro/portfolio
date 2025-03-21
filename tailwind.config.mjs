/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "var(--primary-light)",
        "primary-dark": "var(--primary-dark)",
        "secondary-light": "var(--secondary-light)",
        "secondary-dark": "var(--secondary-dark)",
        "ternary-dark": "var(--ternary-dark)",
        "ternary-light": "var(--ternary-light)",
        "green": "var(--green)",
      },
    },
    container: {
      padding: {
        DEFAULT: '0',
        sm: '2rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '8rem',
      },
    },
  },
  plugins: [
    require('@codaworks/react-glow/tailwind')
  ]
};
