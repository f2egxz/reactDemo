//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * commons-chunk.js
 *
 * 提炼公共代码部分
 *
 * @production
 * @author fe.yf <631190613@qq.com>
 */

const webpack = require('webpack')

module.exports = new webpack.optimize.CommonsChunkPlugin({
  name: 'commons',
  filename: 'commons.[hash].js',
  minChunks: Infinity
})
