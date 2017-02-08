//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * SubMenu.jsx
 *
 * 二级菜单
 *
 * @author fe.yf <631190613@qq.com>
 */

import React       from 'react'
import style       from 'style/subMenu'
import SubMenuItem from 'component/SubMenuItem'
import Container   from 'component/Container'

export function SubMenu({ children }) {
  return (
    <Container flex="auto" center>
      <SubMenuItem link="/system/admins">管理人员</SubMenuItem>
      <SubMenuItem link="/system/admingroups">组群配置</SubMenuItem>
      <SubMenuItem link="/system/pris">权限设置</SubMenuItem>
    </Container>
  )
}

export default SubMenu
