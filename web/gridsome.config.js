// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const path = require('path')

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/style/_variables.scss'),
        path.resolve(__dirname, './node_modules/bootstrap/scss/_functions.scss'),
        path.resolve(__dirname, './node_modules/bootstrap/scss/_variables.scss'),
        path.resolve(__dirname, './node_modules/bootstrap/scss/_mixins.scss')
      ]
    })
}

module.exports = {
  siteName: 'Mahana Biopharma',
  siteDescription:
    'Harnessing cannabis plant genetics to create novel migraine medicines from unique cultivars',
  plugins: [
    {
      use: 'gridsome-plugin-purgecss',
      options: {
        content: [
          './src/**/*.vue',
          './src/**/*.js',
          './src/**/*.jsx',
          './src/**/*.pug',
          './src/**/*.md'
        ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
      }
    },
    {
      use: 'gridsome-source-sanity',
      options: {
        ...clientConfig.sanity,
        typeName: 'Sanity',
        token: process.env.SANITY_TOKEN,
        overlayDrafts: !isProd,
        watchMode: !isProd
      }
    }
  ],
  chainWebpack(config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}
