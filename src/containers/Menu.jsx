//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * Menu.jsx
 *
 * 菜单
 *
 * @author fe.yf <631190613@qq.com>
 */

import React        from 'react'
import style        from 'style/menu'
import { condView } from 'util/view-extra'
import MenuItem     from 'component/MenuItem'
import MenuLabel    from 'component/MenuLabel'

export function Menu() {
  return (
    <nav className={style.container}>
      <MenuItem icon="all">面板</MenuItem>
      <MenuLabel>管理人员配置</MenuLabel>
      <MenuItem icon="service" link="system">系统配置</MenuItem>
    </nav>
  )
}

export default Menu
