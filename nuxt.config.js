export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Happy Insurance',
    // using script tag
    htmlAttrs: {
      lang: 'en'
    },
    script: [
      // {src: 'https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js', body: true}
    ],
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/icon.svg'},
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'},
      {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/daisyui@2.36.1/dist/full.css'},
      // {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'},
      // {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'},
      // {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css'}
    ]
  },
  // using script tag in body
  // Global CSS: https://go.nuxtjs.dev/config-css
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/repositories'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/universal-storage'
  ],
  axios: {
    baseURL: 'http://128.199.211.17/api/v1/',
    browserBaseURL: 'http://128.199.211.17/api/v1/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  css: [
    '@/assets/css/index.css',
    '@/assets/css/tailwind.css',
  ]
}
