//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * Tag.jsx
 *
 * -TODO 标签,默认样式
 * -TODO 各种背景色的标签
 * -TODO 可删除的标签
 *
 * @author fe.gxz
 */


import React          from 'react';
import { classnames } from 'util/view-extra';
import Styles          from 'style/Tag.css';


function MapColorToStyle(color){
  const colorRegExp =/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/
  const colorRegExpRGB = /^[rR][gG][Bb][Aa]?[\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?[\s]*(0\.\d{1,2}|1|0)?[\)]{1}$/g;
  if(color==='default'){
    return classnames(Styles.tag,Styles.dft)
  }else if(colorRegExp.test(color)||colorRegExpRGB.test(color)||typeof(color)==='string'){
    return classnames(Styles.tag,Styles.colors)
  }else{
    return classnames(Styles.tag,Styles.dft)
  }
}


/**
 * Tag
 *
 * 标签组件
 *
 * @param {String} color
 * @param {Boolean} closable
 * @param children
 * @return {XML}
 * @constructor
 */
function Tag({
  color,
  closable,
  children,
  handleClick
}){
  const rgb = color==='default'? '#f8f8f8':color;
  const close = closable?(<i className={classnames(Styles.delete)} onClick={handleClick}>x</i>) :'';
  const Tags = (
    <span className={MapColorToStyle(color)} style={{backgroundColor:rgb}}>
      {children}{close}
    </span>
  );
  return Tags
}

Tag.propTypes = {
  color    : React.PropTypes.string,
  closable : React.PropTypes.bool,
  handleClick : React.PropTypes.func
}

Tag.defaultProps = {
    color: 'default'
}

export default Tag
