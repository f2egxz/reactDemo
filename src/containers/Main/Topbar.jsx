//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * Topbar.jsx
 *
 * 面板顶部
 *
 * @author fe.yf <631190613@qq.com>
 */

import React from 'react'
import style from 'style/topbar'
import Icon  from 'component/Icon'
import { condView } from 'util/view-extra'
import SubMenu from 'container/SubMenu'
import Container from 'component/Container'

export function Topbar({ hasSubMenu, children }) {

  const Bottom = (
    <Container center>
      <SubMenu />
    </Container>
  )

  return (
    <Container className={style.container}>
      <Container center>
        <div className={style.left}></div>

        <div className={style.middle}>
          <Icon name="logo" size="3rem" />
        </div>

        <div className={style.right}>
          <div className={style.avatar}>
            yf
          </div>
        </div>
      </Container>

      {condView(hasSubMenu, Bottom)}
    </Container>
  )
}

export default Topbar
