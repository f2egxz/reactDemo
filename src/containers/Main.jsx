//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * Main.jsx
 *
 * 控制台首页
 *
 * @author fe.yf <631190613@qq.com>
 */

import React          from 'react'
import style          from 'style/main'
import utilStyle      from 'style/util'
import Sidebar        from 'container/Main/Sidebar'
import Topbar         from 'container/Main/Topbar'
import Container      from 'component/Container'
import { classnames } from 'util/view-extra'

export function Main({ children }) {
  return (
    <Container fill>
      <Sidebar />
      <Topbar />
      <Container grow className={style.container}>
        {children}
      </Container>
    </Container>
  )
}

export default Main
