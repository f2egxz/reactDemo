//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * App.jsx
 *
 * 程序容器
 *
 * @author fe.yf <631190613@qq.com>
 */

import React     from 'react'
import utilStyle from 'style/util'

export function App({ children }) {
  return (
    <div id="appContainer" className={utilStyle.container}>
      {children}
    </div>
  )
}

export default App
