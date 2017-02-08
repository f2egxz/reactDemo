//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * output.js
 *
 * Webpack打包文件配置
 *
 * @author fe.yf <631190613@qq.com>
 */

const resolve = require('./pathResolve')
const define  = require('./makeNodeEnvDefine')

module.exports = define(
  function development() {
    return {
      path: resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/'
    }
  },

  function production() {
    return {
      path: resolve('build'),
      filename: '[name].[hash].js',
      publicPath: '/'
    }
  }
)
