const defaults = require('tailwindcss/defaultTheme')

// Settings
const settingsScreens = require('./tailwind.settings.screens')
const settingsFontSizes = require('./tailwind.settings.fontSizes')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class',
  theme: {
    screens: settingsScreens,
    fontSize: settingsFontSizes,
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('tailwindcss-debug-screens'), require('@tailwindcss/line-clamp'), require('@tailwindcss/aspect-ratio')]
}
