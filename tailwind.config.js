module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}'
    // './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
