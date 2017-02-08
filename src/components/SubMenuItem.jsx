//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * SubMenuItem.jsx
 *
 * 二级菜单项
 *
 * @author fe.yf <631190613@qq.com>
 */

import React    from 'react'
import style    from 'style/subMenuItem'
import { Link } from 'react-router'

export default function SubMenuItem({ link, children }) {
  return (
    <Link to={link}
          activeClassName={style.active}
          className={style.container} >
      {children}
    </Link>
  )
}
