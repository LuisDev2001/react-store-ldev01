/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {},
    colors: {
      primary: 'var(--primary)',
      white: 'var(--white)',
      warning: 'var(--warning)',
      danger: 'var(--danger)',
    }
  },
  plugins: [],
  // prefix: 'myPrefix-'
}

