const webpack = require('webpack');

const routerBase = {
  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/jhon-torres-website/' : '/',
    middleware: 'i18n'
  }
};

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Website Jhon Torres',
    meta: [
      {
        charset: 'utf-8'
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }, {
        hid: 'Personal WebSite',
        name: 'Personal WebSite',
        content: 'Website of Jhon Emmanuel Torres'
      },
      { name: 'keywords', content: 'jhon emmanuel torres, unal, ingenieria de sistemas'}
    ],
    link: [
      {
        rel: 'icon',
        href: '/jhon-torres-website/icon.png'
      },
    ]
  },
  css: [
    'normalize.css/normalize.css', 'font-mfizz/dist/font-mfizz.css', '~/css/main.scss'
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  /*
  ** Customize the progress bar color
  */
  // loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({enforce: 'pre', test: /\.(js|vue)$/, loader: 'eslint-loader', exclude: /(node_modules)/})
      }
    },
    postcss: [
      require('postcss-nested')(),
      require('postcss-responsive-type')(),
      require('postcss-hexrgba')()
    ],
    vendor: [
      'jquery', 'bootstrap'
    ],
    plugins: [// set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery'})]
  },
  // modules
  modules: [ '@nuxtjs/component-cache', '@nuxtjs/font-awesome' ],
  // include bootstrap js on startup
  plugins: [
    { src: '~plugins/bootstrap.js', ssr: false },
    { src: '~plugins/vee-validate.js', ssr: false },
    { src: '~plugins/sweetalert.js', ssr: false },
    { src: '~plugins/ga.js', ssr: false },
    '~/plugins/i18n.js'
  ],
  ...routerBase,
  generate: {
    routes: ['/', '/projects', '/have-fun', '/contact',  '/en', '/en/projects', '/en/have-fun', '/en/contact']
  }
}
