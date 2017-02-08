//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * Badge.jsx
 *
 * 徽标组件
 *
 *
 * -TODO 小圆点的徽标
 * -TODO 带数字的徽标，并且可以设置封顶数值
 * -TODO 'success'、'processing'、'default'、'error'、'warning' 五种状态点
 *
 * @author fe.gxz
 */

import React          from 'react'
import { classnames } from 'util/view-extra'
import Styles         from 'style/Badge.css'


function MapStatusToStyle (dot,status){
  if(dot){
    switch (status){
      case 'Success':
        return classnames(Styles.badgeBase,Styles.badgeBaseDot,Styles.success);
      case 'Processing':
        return classnames(Styles.badgeBase,Styles.badgeBaseDot,Styles.processing);
      case 'Default':
        return classnames(Styles.badgeBase,Styles.badgeBaseDot,Styles.default);
      case 'Error':
        return classnames(Styles.badgeBase,Styles.badgeBaseDot);
      case 'Warning':
        return classnames(Styles.badgeBase,Styles.badgeBaseDot,Styles.warning);
      default:
        return new TypeError(`Unknow status type: ${status}`)
    }
  }else {
    return classnames(Styles.badgeBase,Styles.badgeNum)
  }
}



function Badge({
  count,
  overflowCount,
  dot,
  status,
  children
}){
  const num =dot?'':count>overflowCount?overflowCount+'+':count
  const Badges = (
    <div className={Styles.box}>
      {children}
      <span className={MapStatusToStyle(dot,status)}>{num}</span>
    </div>
  )
  return Badges
}

Badge.defaultProps = {
  dot : false,
  status : 'Error',
  overflowCount : 99
}

Badge.PropTypes = {
  count:          React.PropTypes.number || React.PropTypes.string,
  overflowCount:  React.PropTypes.number || React.PropTypes.string,
  dot:            React.PropTypes.bool,
  status: React.PropTypes.oneOf([
    'success',
    'processing',
    'default',
    'error',
    'warning'
  ])
}


export default Badge
