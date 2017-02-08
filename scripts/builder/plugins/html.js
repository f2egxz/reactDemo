//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * html.js
 *
 * 生成html
 *
 * @author fe.yf <631190613@qq.com>
 */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const template          = require('html-webpack-template')
const define            = require('../makeNodeEnvDefine')

module.exports = define(
  function development() {
    return new HtmlWebpackPlugin({
      inject: false,
      template: template,
      title: 'Yihuan Admin App',
      scripts: [
        '/vendor.js'
      ]
    })
  },
  function production() {

    function makeCDNUrl() {

      function tpl(dep, ver, costom) {
        const domain  = 'unpkg.com'
        const control = 'https'

        if(costom)
          return `${control}://${domain}/${dep}/${costom}`

        return `${control}://${domain}/${dep}@${ver}/dist/${dep}.min.js`
      }

      const deps = require('../pickDependencies')

      return deps.map(n => {
        const [ dep ] = n
        if(dep === 'react-router')
          return tpl(dep, null, 'umd/ReactRouter.min.js')
        if(dep === 'react-router-redux')
          return tpl(dep, null, 'dist/ReactRouterRedux.min.js')

        return tpl.apply(null, n)

      })
    }


    return new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: false,
      template: template,
      title: 'Yihuan Admin App',
      minify: {
        removeTagWhitespace: true,
        collapseWhitespace: true
      },
      scripts: [
          ...makeCDNUrl()
      ]
    })
  }
)
