//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * extract-text.js
 *
 * 配套ExtractTextPlugin提炼样式表
 *
 * @production
 * @author fe.yf <631190613@qq.com>
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = new ExtractTextPlugin({
  filename: 'app.[hash].css',
  allChunks: true
})
