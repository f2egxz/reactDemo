//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * boot.js
 *
 * 启动程序
 *
 * @desc 不要修改此文件
 * @author fe.yf <631190613@qq.com>
 */

import React      from 'react'
import { render } from 'react-dom'
import Root       from './'

/**
 * 设置容器
 */
const node = document.createElement('div')

node.id = 'app'
document.body.appendChild(node)

/**
 * 渲染程序节点
 */
function main() {
  if(process.env.NODE_ENV === 'development') {
    const AppContainer = require('react-hot-loader').AppContainer
    render(<AppContainer><Root /></AppContainer>, node)
  } else {
    render(<Root />, node)
  }
}

/**
 * 启用热更模块
 */
if(process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./index', main)
}

/**
 * 启动程序
 */
main()
