//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * css.js
 *
 * css-loader加载样式
 *
 * @author fe.yf <631190613@qq.com>
 */

const resolve       = require('./../pathResolve')
const define        = require('./../makeNodeEnvDefine')
const ExtarctPlugin = require('./../plugins/extract-text')

module.exports = define(
  function development() {
    return {
      test: /\.css$/,
      include: [
        resolve('src/styles'),
        resolve('node_modules/normalize.css')
      ],
      loader: [
        'style-loader',
        'css-loader?modules&importLoaders=1',
        'postcss-loader'
      ]
    }
  },
  function production() {
    return {
      test: /\.css$/,
      loader:  ExtarctPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: [
          {
            loader: 'css-loader',
            query: {
              modules: true,
              importLoaders: 1,
              minimize: true,
              localIdentName: '[hash:base64:5]',

              // Option for cssnano transformer
              colormin: true,
              discardComments: {
                removeAll: true
              },
              discardDuplicates: true,
              discardOverridden: true,
              mergeLonghand: true,
              normalizeCharset: true,
              reduceBackgroundRepeat: true,
              reduceIdents: true,
              reducePositions: true,
              reduceTransforms: true,
              svgo: true,
              calc: true,
              convertValues: true,
              discardEmpty: true,
              discardUnused: true,
              mergeRules: true,
              minifyGradients: true,
              minifySelectors: true,
              normalizeString: true,
              reduceDisplayValues: true,
              reduceInitial: true,
              reduceTimingFunctions: true,
              uniqueSelectors: true
            }
          },
          'postcss-loader'
        ]
      })
    }
  }
)
