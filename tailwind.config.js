module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': ['9rem', { lineHeight: '1' }], // Example size, adjust as needed
        '11xl': ['10rem', { lineHeight: '1' }], // Example size, adjust as needed
        '12xl': ['11rem', { lineHeight: '1' }], // Example size, adjust as needed
      },
    },
  },
  plugins: [],
}