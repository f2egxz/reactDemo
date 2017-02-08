//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * MenuItem.jsx
 *
 * 菜单项
 *
 * @author fe.yf <631190613@qq.com>
 */

import React               from 'react'
import { Link, IndexLink } from 'react-router'
import style               from 'style/menuItem'
import { condView }        from 'util/view-extra'
import Icon                from 'component/Icon'

const menuItemHelp = Component => ({ link, children }) => {
  return (
    <Component to={link}
               activeClassName={style.active}
               className={style.container} >
      {children}
    </Component>
  )
}

export default function MenuItem({ link = '/',
                                   icon = '',
                                   children }) {
  const isHomeLink = link === '/'
  const WapperComponent = menuItemHelp(isHomeLink ? IndexLink : Link)
  return (
    <WapperComponent link={link}>
      <div className={style.icon}>
        <Icon name={icon} />
      </div>
      <span>{children}</span>
    </WapperComponent>
  )
}
