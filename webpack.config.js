const { join } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

const HOST = 'localhost'
const PORT = 4242

/**
 * Webpack Renderer Process Config :
 * Executed with `webpack-dev-server` for development
 */
const config = module.exports = merge(
  common.config,
  common.parts.rendererHotReload(HOST, PORT),

  {
    devtool: 'inline-source-map',

    entry: {
      renderer: [
        join(common.paths.source, 'index.tsx')
      ],
      vendor: ['react', 'react-dom', 'typestyle', 'lodash', 'react-hot-loader']
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
      })
    ],

    output: {
      path: common.paths.build,
      publicPath: '/app/',
      filename: '[name].js'
    }
  },
  common.parts.createHtmlIndex('Video'),
  common.parts.loadImages(common.paths.images),
  common.parts.compileTypescript()
)
