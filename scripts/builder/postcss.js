//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * postcss.js
 *
 * Postcss插件配置
 *
 * @desc
 * Include plugins:
 * - [postcss-short](https://github.com/jonathantneal/postcss-short)
 *
 * @author fe.yf <631190613@qq.com>
 */

const define  = require('./makeNodeEnvDefine')
const short   = require('postcss-short')
const nesting = require('postcss-nesting')
const mixins  = require('postcss-mixins')
const colorfx = require('postcss-color-function')

module.exports = define(
  development => [
    short(),
    mixins(),
    colorfx(),
    nesting()
  ],
  production  => [
    short(),
    mixins(),
    colorfx(),
    nesting()
  ]
)
