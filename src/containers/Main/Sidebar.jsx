//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * Sidebar.jsx
 *
 * 侧边栏，菜单，头部，底部
 *
 * @author fe.yf <631190613@qq.com>
 */

import React               from 'react'
import style               from 'style/sidebar'
import Menu from 'container/Menu'
import Header from 'container/Header'
import Footer from 'container/Footer'

export function Sidebar({ children }) {
  return (
    <aside className={style.container}>
      <Header/>
      <Menu />
      <Footer />
      {children}
    </aside>
  )
}

export default Sidebar
