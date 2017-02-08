//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * plugins.js
 *
 * Webpack插件配置
 *
 * @author fe.yf <631190613@qq.com>
 */

const DefinePlugin               = require('./plugins/define')
const BundleAnalyzerPlugin       = require('./plugins/bundle-analyzer')
const HotModuleReplacementPlugin = require('./plugins/hmr')
const NamedModulesPlugin         = require('./plugins/named-modules')
const HtmlPlugin                 = require('./plugins/html')
const ExtractTextPlugin          = require('./plugins/extract-text')
const CommonsChunkPlugin         = require('./plugins/commons-chunk')
const LoaderOptionsPlugin        = require('./plugins/loader-options')
const StyleLintPlugin            = require('./plugins/stylelint')
const DLLPlugin                  = require('./plugins/dll')
const UglifyPlugin               = require('./plugins/uglify')
const define                     = require('./makeNodeEnvDefine')


module.exports = define(
  function development() {
    return [
      DefinePlugin,
      //BundleAnalyzerPlugin,
      HotModuleReplacementPlugin,
      NamedModulesPlugin,
      HtmlPlugin,
      LoaderOptionsPlugin,
      DLLPlugin,
      CommonsChunkPlugin,
      //StyleLintPlugin
    ]
  },

  function production() {
    return [
      DefinePlugin,
      ExtractTextPlugin,
      CommonsChunkPlugin,
      HtmlPlugin,
      LoaderOptionsPlugin,
      //UglifyPlugin
    ]
  }
)
