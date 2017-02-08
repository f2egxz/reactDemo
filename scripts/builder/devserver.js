//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * devserver.js
 *
 * Webpack开发工具配置
 *
 * @author fe.yf <631190613@qq.com>
 */

const resolve = require('./pathResolve')

module.exports = {
  stats: 'normal',
  //features: [],
  //serverSideRender: true,
  //stats: 'verbose',
  contentBase: resolve('dist'),
  compress: true,
  historyApiFallback: true,
  publicPath: '/',
  inline: true,
  hot: true,
  port: 9000,
  proxy: {
    '/api': {
      target: 'http://localhost:8000/v1/api'
    }
  }
}
