//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * Tooltip.jsx
 *
 * -TODO 文字提示框(出现位置位于文字：上左，上中，上右，右侧中间，下右，下中，下左，左侧中间)
 *
 * @author fe.gxz
 */

import React          from 'react';
import { classnames } from 'util/view-extra'
import Styles         from 'style/Tooltip.css'

function boundClassNameByType (placement){
  switch (placement) {
    case 'Top':
      return classnames(Styles.tipTC);
    case 'Right':
      return classnames(Styles.tipRC);
    case 'Bottom':
      return classnames(Styles.tipBC);
    case 'Left':
      return classnames(Styles.tipLC);
    case 'TL':
      return classnames(Styles.tipTL);
    case 'TR':
      return classnames(Styles.tipTR);
    case 'BL':
      return classnames(Styles.tipBL);
    case 'BR':
      return classnames(Styles.tipBR);
  }
}

/**
 * Tooltip
 *
 * 文本提示框组件
 *
 * @param {String} text
 * @param {String} placement
 *
 * @return {html} Tooltip
 */
class Tooltip extends React.Component {
  constructor(){
    super()
    this.state = {
      show: false
    }
  }
  render(){
    const {placement,children,text} = this.props
    const tip = <span className={boundClassNameByType(placement)}>{text}</span>
    return (
      <div className = {classnames(Styles.tooltipBox)}
           onMouseEnter = {this.handleMouseEnter.bind(this)}
           onMouseLeave={this.handleMouseLeave.bind(this)}>
        { children }
        {this.state.show?tip:''}
      </div>
    )
  }
  handleMouseEnter(){
    this.setState({
      show:true
    })
  }
  handleMouseLeave(){
    this.setState({
      show:false
    })
  }
}

Tooltip.propTypes = {
  text:React.PropTypes.string.isRequired,
  placement:React.PropTypes.oneOf([
    'Top',
    'Right',
    'Bottom',
    'Left',
    'TL',
    'TR',
    'BL',
    'BR'
  ])
}

Tooltip.defaultProps = {
  placement: 'Top'
}



export default Tooltip
