const webpack = require('webpack')
const HtmlWebpack = require('html-webpack-plugin')
const { join } = require('path')

const projectRoot = exports.projectRoot = __dirname
const isProduction = exports.isProduction = process.env.NODE_ENV === 'production'

/**
 * Configuration common paths
 */
const paths = exports.paths = {
  source: join(projectRoot, 'src'),
  images: join(projectRoot, 'src/assets/images'),
  build: join(projectRoot, 'app')
}


/**
 * Common configuration between development and production
 */
const config = exports.config =
  {
    resolve: {
      modules: [
        'node_modules',
        paths.source
      ],
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
  }


/**
 * Configuration splitted in functions for modularity
 */
const parts = exports.parts = {

  rendererHotReload: (host, port) => ({
    devServer: {
      hot: true,
      host,
      port,
      historyApiFallback: true
    },

    entry: {
      renderer: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://${host}:${port}`,
        'webpack/hot/only-dev-server',
      ]
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  }),

  compileTypescript: () => ({
    module: {
      loaders: [
        {
          test: /\.tsx?$/,
          loaders: ['ts-loader']
        }
      ]
    }
  }),

  // Define a variable statically during build process
  setFreeVariable: (key, value) => ({
    plugins: [
      new webpack.DefinePlugin({
        [key]: JSON.stringify(value)
      })
    ]
  }),

  // Minify and optimize code by removing unused code, such as
  // conditions involving variables statically resolved
  // after using setFreeVariable
  minify: () => ({
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  }),

  loadImages: paths => ({
    module: {
      loaders: [
        {
          test: /\.svg$/,
          loader: 'file-loader',
          include: paths
        }
      ]
    }
  }),

  loadFonts: paths => ({
    module: {
      loaders: [
        {
          test: /\.woff(2)?$/,
          loader: 'url-loader',
          query: {
            name: 'fonts/[hash].[ext]'
          },
          include: paths
        }
      ]
    }
  }),

  setupStyles: paths => ({
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader?modules', 'sass-loader'],
          include: paths
        }
      ]
    }
  }),

  createHtmlIndex: (title) => ({
    plugins: [
      new HtmlWebpack({
        title,
        excludeChunks: ['main']
      })
    ]
  }),

  extractBundle: (options) => ({
    entry: [options.entry],
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest']
      })
    ]
  })
}
