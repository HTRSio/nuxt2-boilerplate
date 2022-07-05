export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt2-boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // https://tailwindcss.com/docs/guides/nuxtjs
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://tailwindcss.com/docs/guides/nuxtjs
    '@nuxt/postcss8',
    // https://github.com/fumeapp/nuxt-storm
    ['nuxt-storm', { nested: true }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://i18n.nuxtjs.org/setup
    '@nuxtjs/i18n',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
    // https://sitemap.nuxtjs.org/guide (always at end of array)
    '@nuxtjs/sitemap'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // https://tailwindcss.com/docs/guides/nuxtjs
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },
  i18n: {
    locales: [
      {
        code: 'de',
        iso: 'de-DE',
        name: 'Deutsch',
        file: 'de-DE.js',
        flag: 'de.png',
        sr: 'Sprache ändern'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en-US.js',
        flag: 'en.png',
        sr: 'Change language'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true // recommended
    },
    baseUrl: 'https://htrs.io'
  },
  robots: {
    robots: {
      UserAgent: '*',
      Allow: '/',
      Sitemap: 'https://htrs.io/sitemap.xml'
    }
  },
  sitemap: {
    hostname: 'https://htrs.io',
    gzip: true
    // i18n: true,
    // nuxt-i18n notation (advanced)
  }
}
