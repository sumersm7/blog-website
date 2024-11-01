export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'aawssm-blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '630' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://jsonplaceholder.typicode.com',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  sitemap: {
    hostname: 'https://nuxtblog.ssamdtwo.aawssm.in',
    gzip: true,
    routes: async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      return data.map((post) => `/post/${post.id}`)
    },
  },
  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: 'https://nuxtblog.ssamdtwo.aawssm.in/sitemap.xml',
  },
}
