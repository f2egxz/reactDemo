//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * MenuLabel.jsx
 *
 * 菜单组标签
 *
 * @author fe.yf <631190613@qq.com>
 */

import React from 'react'
import style from 'style/menuLabel'

export default function MenuLabel({ children }) {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}
