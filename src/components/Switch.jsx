//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * Switch.jsx
 *
 * -TODO 小中大三种大小的开关按钮
 *
 *
 * @author fe.gxz
 */

import React          from 'react';
import { classnames } from 'util/view-extra'
import Styles         from 'style/Switch.css'


function BoxBoundClassNamesBySize (type,bool,disabled){
  return classnames(type, bool?Styles.switchBoxActive:'',disabled?Styles.disabledBox:'')
}

function BoxMapSizeToClassNames(size,bool,disabled){
  switch (size){
    case 'big':
      return BoxBoundClassNamesBySize(Styles.BSwitchBox,bool,disabled)
    case 'default':
      return BoxBoundClassNamesBySize(Styles.SwitchBox,bool,disabled)
    case 'small':
      return BoxBoundClassNamesBySize(Styles.SSwitchBox,bool,disabled)
    default:
      throw new TypeError(`Unknow Switch size ${size}`)
  }
}

function ItemBoundClassNamesBySize(item,itemActive,bool,disabled){
  return classnames(item,bool?itemActive:'',disabled?Styles.disabledItem:'')
}

function ItemMapSizeToClassNames(size,bool,disabled) {
  switch (size){
    case 'big':
      return ItemBoundClassNamesBySize(Styles.BSwitchItem,Styles.BSwitchItemActive,bool,disabled)
    case 'default':
      return ItemBoundClassNamesBySize(Styles.SwitchItem,Styles.SwitchItemActive,bool,disabled)
    case 'small':
      return ItemBoundClassNamesBySize(Styles.SSwitchItem,Styles.SSwitchItemActive,bool,disabled)
    default:
      throw new TypeError(`Unknow Switch size ${size}`)
  }
}

function boundClick (handleClick,disabled){
  return ()=>{
    if(!disabled){
      handleClick();
    }
  }
}

/**
 * Switch
 *
 * 开关
 * @param {boolean} bool
 * @param {string} size
 * @param {boolean} disabled
 * @param {func} handleClick
 * @return {html} switch
 */
function Switch({
  bool,
  size,
  disabled,
  handleClick
}) {
  return (
    <div className= {BoxMapSizeToClassNames(size,bool,disabled)} onClick= {boundClick(handleClick,disabled)}>
      <span className = {ItemMapSizeToClassNames(size,bool,disabled)}/>
    </div>
  )
}

Switch.propTypes = {
  bool       : React.PropTypes.bool.isRequired,
  disabled   : React.PropTypes.bool,
  handleClick: React.PropTypes.func.isRequired,
  size: React.PropTypes.oneOf([
    'small',
    'default',
    'big'
  ])
}

Switch.defaultProps = {
  size:'default',
  disabled:false
}


export default Switch
