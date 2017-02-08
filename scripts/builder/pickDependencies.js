//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * pickDependencies.js
 *
 * 从package.json中提取依赖包
 *
 * @author fe.yf <631190613@qq.com>
 */

const { dependencies } = require('../../package.json')

const blackList = [
  'normalize.css',
  'redux-auth-wrapper'
]

const keys = Object.keys(dependencies)

module.exports = keys
  .filter(key => blackList.indexOf(key) === -1)
  .map(key => [key, dependencies[key]])
