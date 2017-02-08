//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * FromControl.jsx
 *
 * 表单项
 *
 * @author fe.yf <631190613@qq.com>
 */

import React from 'react'
import style from 'style/formControl'

export default function FormControl({ name, label, children }) {
  return (
    <label htmlFor={name} className={style.container}>
      <div className={style.label}>{label}</div>
      {children}
    </label>
  )
}
