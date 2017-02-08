//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * Button.jsx
 *
 * 按钮组件
 *
 * - DONE 普通按钮，只显示文字与单击事件
 * - DONE 链接按钮，添加一个链接地址`to`，点击后跳转链接，会触发router action
 * - TODO 异步按钮，等待单击事件异步完成并执行回调
 * - TODO 带有图标的按钮（样式）
 * - TODO 圆形按钮（样式）
 * - TODO 进度条按钮，如发送验证码等待60s
 *
 * @author fe.yf <631190613@qq.com>
 */

import React          from 'react'
import { connect }    from 'react-redux'
import { Link }       from 'react-router'
import { classnames } from 'util/view-extra'
import style          from 'style/button.css'
import * as action    from 'action/button'

/**
 * boundClassNamesByType
 *
 * 绑定按钮样式
 *
 * @param {string} typeStyle - 按钮类型样式
 * @return {string} 组合按钮样式
 */
function boundClassNamesByType(typeStyle) {
  return classnames(style.button, typeStyle)
}


/**
 * mapTypeToClassNames
 *
 * 将类型映射为样式
 *
 * @private
 * @param {buttonType} type - 按钮类型
 * @throw {TypeError} 未知类型
 * @return {string} 组合按钮样式
 */
function mapTypeToClassNames(type) {
  switch(type) {
    case 'primary':
      return boundClassNamesByType(style.buttonPrimary)
    case 'primaryDark':
      return boundClassNamesByType(style.buttonPrimaryDark)
    case 'primaryBorder':
      return boundClassNamesByType(style.buttonPrimaryBorder)
    case 'secondary':
      return boundClassNamesByType(style.buttonSecondary)
    case 'secondaryDark':
      return boundClassNamesByType(style.buttonSecondaryDark)
    case 'secondaryBorder':
      return boundClassNamesByType(style.buttonSecondaryBorder)
    default:
      throw new TypeError(`Unknow button type ${type}`)
  }
}


/**
 * Button
 *
 * 按钮组件
 *
 * @stateless
 */
function Button({
  text,
  type,
  to,
  clickHandle,
  children,
  ...props
}) {

  // 清除自定义props
  delete props.actionId

  // 按钮内容
  const context = (
    <button className={mapTypeToClassNames(type)}
            onClick={clickHandle}
            {...props}>
      {children || text}
    </button>
  )

  // 如果是链接，按钮嵌套在<Link />内
  if(to) return (
    <Link to={to}>{context}</Link>
  )

  return context
}

/**
 * 验证按钮属性并设置默认值
 */
Button.displayName = 'Button'

Button.propTypes = {
  text: React.PropTypes.string,
  type: React.PropTypes.oneOf([
    'primary',
    'primaryDark',
    'primaryBorder',
    'secondary',
    'secondaryDark',
    'secondaryBorder'
  ]),
  to : React.PropTypes.string,
  clickHandle: React.PropTypes.func,
  children: React.PropTypes.element
}

Button.defaultProps = {
  text: '确定',
  type: 'primary'
}

export default Button


/**
 * 链接redux，并导出链接后的组件
 */

function mapDispatchToProps(dispatch, ownProps) {
  const { actionId, clickHandle } = ownProps

  if(!actionId) return {
    clickHandle: () => dispatch(clickHandle())
  }

  return {
    clickHandle: () => dispatch(action.clickButton(actionId)(clickHandle))
  }
}

export const ConnectButton = connect(
  undefined,
  mapDispatchToProps
)(Button)


/**
 * 导出常用按钮
 *
 * - 返回按钮，调用history的go(-1)，回退一层
 */

import { goBack } from 'react-router-redux'

export function BackButton({ text = '返回', ...props }) {

  return (
    <ConnectButton {...props}
                   text={text}
                   type="primaryBorder"
                   clickHandle={goBack} />
  )
}


export function AsyncButton() {
  return (
    <ConnectButton {...props}
                   text={text}
                   type="primaryBorder"
                   clickHandle={goBack} />
  )
}
