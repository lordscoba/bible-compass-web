/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-pattern':
          "url('http://www.evethemes.com/demo/lp/startup/demo/demo-1.html')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }),
    },
  },
  plugins: [],
};
