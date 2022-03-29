export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'testNuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
      { property: 'og:title', content: '77電商' },
      { property: 'og:description', content: '88的77電商' },
      { property: 'og:site_name', content: '77電商' },
      { property: 'og:locale', content: 'zh_TW' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css', integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU', crossorigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/transition.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  serverMiddleware: [
    '~/server/index.js'
    // '~/api/index.js'
  ],

// -------------------------------------
  // loading 寫法 : https://ithelp.ithome.com.tw/articles/10205496

  // loading: `~/components/loading.vue`, // 客製讀取效果

  // loading: { // 針對原進度條元件調整
  //     color: 'black',
  //     failedColor: 'red',
  //     height: '10px',
  //     duration: 5000,
  //     rtl: false,
  //     throttle: 0
  // },
//   $nuxt.$loading.start(): 顯示進度條
//   $nuxt.$loading.end(): 結束進度條
// -------------------------------------

}
