//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * Container.jsx
 *
 * 布局组件，基于flex
 *
 * - DONE 默认容器
 * - DONE 填充容器
 * - DONE 栅格
 *
 * @author fe.yf <631190613@qq.com>
 */

import React          from 'react'
import utilStyle      from 'style/util'
import { classnames } from 'util/view-extra'


/**
 * combineClassNames
 *
 * 用于合并样式
 *
 * @private
 * @param {string} className - 传入组件的样式，用于绑定函数
 * @param {[string]} target - 目标样式
 * @return {string}
 */
function combineClassNames(className) {
  return function(...target) {
    return classnames(
      utilStyle.borderBox,
      className,
      ...target
    )
  }
}


/**
 * Container
 *
 * 布局组件
 *
 * @stateless
 * @param {boolean} fill - 是否填充，用于最外层容器，设置了height: 100%
 * @param {boolean} grow - 自增长，基于flex布局，设置flex: 1
 * @param {string|number} flex - 设置容器尺寸，数字也可以用来做栅格，e.g flex={0.5} => flex='50%'
 * @param {boolean} center - 居中，设置align-items: center
 * @param {string|boolean} margin - 块级居中，margin: 0 auto
 * @param {string|boolean} padding - 设置容器内部
 */
export default function Container({ fill,
                                    grow,
                                    flex,
                                    style,
                                    center,
                                    margin,
                                    padding,
                                    className,
                                    children,
                                    ...props }) {

  // 绑定combineClassNames函数
  const boundCombineClassNames = combineClassNames(className)

  /**
   * classNameFactory
   *
   * 根据props选择样式
   *
   * @return {string}
   */
  function classNameFactory() {
    if(grow) {
      return boundCombineClassNames(
        utilStyle.flexFillContainer
      )
    }

    if(fill) {
      return boundCombineClassNames(
        utilStyle.flexVerticalContainer,
        utilStyle.container
      )
    }

    if(margin) {
      return boundCombineClassNames(
        utilStyle.marginContainer,
        utilStyle.flexContainer
      )
    }

    if(center) {
      return boundCombineClassNames(
        utilStyle.flexCenterContainer
      )
    }

    return boundCombineClassNames(
      utilStyle.flexVerticalContainer
    )
  }


  /**
   * fixedContainer
   *
   * 动态设置容器样式
   *
   * @return {object}
   */
  function fixedContainer() {
    if(!flex && !style) return

    const marginStyle = margin ? {
      width: typeof margin === 'string' ? margin : '1000px'
    } : {}

    const paddingStyle = padding ? {
      padding: typeof padding === 'string' ? padding : '1rem'
    } : {}

    function matchFlex(flex) {
      switch(typeof flex) {
        case 'string':
          return { flex: `0 1 ${flex}` }
        case 'number':
          if(flex === 1) return { flex: 1 }
          if(flex < 1) return { flex: `0 1 ${flex * 100}%`}
          return { flex: `0 1 ${flex}` }
        default:
          return {}
      }
    }

    return {
      ...matchFlex(flex),
      ...marginStyle,
      ...paddingStyle,
      ...style
    }
  }

  return (
    <section {...props}
             style={fixedContainer()}
             className={classNameFactory()}>
      {children}
    </section>
  )
}

Container.displayName = 'Container'

Container.propTypes = {
  fill:   React.PropTypes.bool,
  grow:   React.PropTypes.bool,
  center: React.PropTypes.bool,
  margin: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]),
  padding: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]),
  flex: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
    React.PropTypes.bool,
  ])
}

Container.defaultProps = {
  fill: false,
  grow: false,
  center: false,
  style: {}
}


/**
 * BaseContainer
 *
 * 布局组件，用于填充路由
 *
 * @stateless
 */
export function BaseContainer({ children }) {
  return (
    <div>{children}</div>
  )
}
