// -*- coding: utf-8-*-

/**
 * Cascader.jsx
 *
 * 联级选择组件 的下拉框组件 的选项
 *
 * -TODO 下拉框选项
 *
 * @author fe.gxz
 */

import React              from 'react';
import { classnames }     from 'util/view-extra'
import Styles             from 'style/Cascader.css'

class SlelectMenuLi extends React.Component {
  constructor(){
    super()
  }
  render(){
    const { text,sub,choose } = this.props
    return (
      <li className={classnames(Styles.defaultLi,sub?Styles.rightArrow:'',choose===text?Styles.choose:'')}
        onClick={this.handleClick.bind(this)}>{text}</li>
    )
  }
  handleClick(){
    const { text,onChange,sub } = this.props
    onChange(text,sub)
  }
}

export default SlelectMenuLi
