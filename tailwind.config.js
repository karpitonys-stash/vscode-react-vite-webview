/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './webview/index.html',                   // webview/index.html
    './webview/src/**/*.{js,jsx,ts,tsx}',     // webview/src 폴더
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
