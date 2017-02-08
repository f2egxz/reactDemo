//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * webpack.config.prod.js
 *
 * Webpack部署环境配置
 *
 * @author fe.yf <631190613@qq.com>
 */

const resolve = require('./pathResolve')

module.exports = {
  entry:     require('./entry'),
  output:    require('./output'),
  module: {
    rules:   require('./loaders')
  },
  resolve:   require('./resolve'),
  externals: require('./externals'),
  plugins:   require('./plugins'),
  context:   resolve('src'),

  //devtool: 'cheap-module-eval-source-map'
}
