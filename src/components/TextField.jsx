//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * TextField.jsx
 *
 * 表单输入框
 *
 * @author fe.yf <631190613@qq.com>
 */

import React           from 'react'
import { compose }     from 'redux'
import { connect }     from 'react-redux'
import style           from 'style/textfield'
import { changeValue } from 'action/textfield'
import { classnames }  from 'util/view-extra'

const mapStateToProps = pick => state => ({
  value: pick(state).value
})

const mapDispatchToProps = name => dispatch => {
  return {
    changeHandle: compose(dispatch, changeValue(name))
  }
}

function TextField({ value,
                     type = 'text',
                     name,
                     placeholder,
                     isArea = false,
                     changeHandle }) {

  return (
    !isArea ?
    (<input type={type}
            name={name}
            id={name}
            value={value}
            className={classnames(style.input, style.inputPrimary)}
            placeholder={placeholder}
            onChange={changeHandle} />) :
    (<textarea type={type}
               name={name}
               id={name}
               value={value}
               placeholder={placeholder}
               className={classnames(style.input, style.area, style.inputPrimary)}
               onChange={changeHandle}></textarea>
    )
  )
}

export default function WrapperTextField(connectProp, actionName) {

  const ConnectedComponent = connect(
    mapStateToProps(connectProp),
    mapDispatchToProps(actionName)
  )(TextField)

  return ConnectedComponent
}
