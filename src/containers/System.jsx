//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * System.jsx
 *
 * 系统管理模块
 *
 * @author fe.yf <631190613@qq.com>
 */

import React from 'react'
import style from 'style/util'

export function System({ children }) {
  return (
    <section id="systemContainer" className={style.bodyContainer}>
      {children}
    </section>
  )
}

export default System
