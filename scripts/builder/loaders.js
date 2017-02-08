//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * loaders.js
 *
 * Webpack加载器配置
 *
 * @author fe.yf <631190613@qq.com>
 */

const jsLoader     = require('./loaders/javascript')
const cssLoader    = require('./loaders/css')
const imageLoader  = require('./loaders/image')
const svgLoader    = require('./loaders/svg')
const eslintLoader = require('./loaders/eslint')
const define       = require('./makeNodeEnvDefine')


module.exports = define(
  development => [
    jsLoader,
    cssLoader,
    imageLoader,
    svgLoader,
    //eslintLoader
  ]
)
