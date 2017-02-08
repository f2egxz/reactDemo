//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * Header.jsx
 *
 * 侧边栏顶部
 *
 * @author fe.yf <631190613@qq.com>
 */

import React from 'react'
import style from 'style/header'
import Icon  from 'component/Icon'

export function Header({ children }) {
  return (
    <header className={style.container}>
      <Icon name="logo" size="4rem" />

    </header>
  )
}

export default Header
