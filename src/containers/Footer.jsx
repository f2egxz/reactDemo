//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * Header.jsx
 *
 * 侧边栏底部
 *
 * @author fe.yf <631190613@qq.com>
 */

import React from 'react'
import style from  'style/footer'
import Icon  from  'component/Icon'

export function Footer({ children }) {
  return (
    <footer className={style.container}>
      <Icon name="logo" />
    </footer>
  )
}

export default Footer
