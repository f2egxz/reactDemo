//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * webpack.config.dll.js
 *
 * 配置依赖包，用于加速打包
 *
 * @author fe.yf <631190613@qq.com>
 */

const webpack = require('webpack')
const resolve = require('./pathResolve')

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-router',
      'react-router-redux',
      'redux-thunk',
      'react-modal',
      'js-data',
      'js-data-http',
      'js-data-localstorage',

      'react-hot-loader/index.js',
      'react-hot-loader/patch.js',
      'webpack-dev-server/client/index.js',
      //'webpack/hot/only-dev-server.js',
      //'webpack/hot/dev-server.js',
      'core-js'
    ]
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: resolve('dist/[name]-manifest.json'),
      name: "[name]"
    })
  ],
  performance: {
    hints: false
  }
}
