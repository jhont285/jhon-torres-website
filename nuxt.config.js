const webpack = require('webpack');

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
        content: 'Jhon Torres'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/icon.png'
      }
    ]
  },
  css: [
    'bootswatch/dist/cosmo/bootstrap.min.css', 'font-awesome/css/font-awesome.min.css', 'font-mfizz/dist/font-mfizz.css', '~/css/main.scss'
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
  // include bootstrap js on startup
  plugins: ['~plugins/bootstrap.js',  { src: '~plugins/vee-validate.js', ssr: false }, { src: '~plugins/sweetalert.js', ssr: false } ]

}
