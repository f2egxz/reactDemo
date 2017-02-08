//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * resolve.js
 *
 * Webpack路径加载配置
 *
 * @author fe.yf <631190613@qq.com>
 */

const resolve = require('./pathResolve')
const define  = require('./makeNodeEnvDefine')


module.exports = define(
  development => ({
    alias: {
      icon:       resolve('public/icons'),
      avatar:     resolve('public/avatars'),
      reducer:    resolve('src/reducers'),
      action:     resolve('src/actions'),
      type:       resolve('src/types'),
      selector:   resolve('src/selectors'),
      component:  resolve('src/components'),
      container:  resolve('src/containers'),
      middleware: resolve('src/middlewares'),
      store:      resolve('src/store'),
      model:      resolve('src/models'),
      service:    resolve('src/services'),
      style:      resolve('src/styles'),
      route:      resolve('src/routes'),
      util:       resolve('src/utils')
    },
    extensions: ['.js', '.json', '.jsx', '.css', '.svg', '.png']
  })
)
