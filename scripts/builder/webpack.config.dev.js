//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * webpack.config.dev.js
 *
 * Webpack开发环境配置
 *
 * @author fe.yf <631190613@qq.com>
 */

const resolve = require('./pathResolve')

module.exports = {
  entry: require('./entry'),
  output: require('./output'),
  module: {
    rules: require('./loaders')
  },
  resolve: require('./resolve'),
  devServer: require('./devserver'),
  plugins: require('./plugins'),
  context: resolve('src'),
  devtool: 'cheap-module-eval-source-map',
  performance: {
    hints: false
  }
}
