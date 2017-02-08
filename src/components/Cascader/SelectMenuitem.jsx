// -*- coding: utf-8-*-

/**
 * Cascader.jsx
 *
 * 联级选择组件 的下拉框组件 的菜单
 *
 * -TODO 下拉框子菜单
 *
 * @author fe.gxz
 */

import React              from 'react';
import { classnames }     from 'util/view-extra'
import Styles             from 'style/Cascader.css'
import Mli                from 'component/Cascader/SelectMenuLi.jsx'

function MenuItem ({
  list,onChange,choose
}){
  const lis = list.map((item)=>(
    <Mli sub = {Array.isArray(item.sub)&&item.sub.length>0? true:false}
         key = {item.name}
         text = {item.name}
         choose = {choose}
         onChange = {onChange}
    />
  ))
  return (
    <ul className={classnames(Styles.defaultUl)}>
      {lis}
    </ul>
  )
}


export default MenuItem
