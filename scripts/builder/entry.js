//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * entry.js
 *
 * Webpack入口文件配置
 *
 * @author fe.yf <631190613@qq.com>
 */

const define = require('./makeNodeEnvDefine')


module.exports = define(
  function development() {
    return [
      'react-hot-loader/patch',
      'webpack-dev-server/client',
      'webpack/hot/only-dev-server',
      './boot.js'
    ]
  },
  function production() {
    return {
      app: './boot.js'
    }
  }
)
