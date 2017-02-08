//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * Alert.jsx
 *
 * 弹出框 基于react-modal
 *
 * @author fe.yf <631190613@qq.com>
 */

import React         from 'react'
import { connect }   from 'react-redux'
import Modal         from 'react-modal'
import style         from 'style/alert'
import buttonStyle   from 'style/button'
import * as selector from 'selector/alert'
import { constFn }   from 'util/function-extra'
import { condView }  from 'util/view-extra'
import { classes } from 'util/classnames'

export function Alert({ modal,
                        children,
                        title,
                        text,
                        type,
                        confirmButtonText = 'OK',
                        cancelButtonText = 'Cancel',
                        showConfirmButton = true,
                        showCancelButton = false,
                        closeOnConfirm,
                        closeOnCancel,
                        pressCancelButton,
                        pressConfirmButton }) {

  const boundConfirmAction = () => pressConfirmButton(closeOnConfirm)
  const boundCancelAction  = () => pressCancelButton(closeOnCancel)

  const showButton = showConfirmButton || showCancelButton

  return (
    <Modal {...modal}>

      {/* 标题 */}
      <div className={style.title}>
        {title}
      </div>

      {/* 内容 */}
      <div className={style.text}>
        { children }
      </div>

      {/* 按钮组 */}
      {condView(showButton, (
         <div className={style.buttons}>
           {condView(showConfirmButton, (
              <button type="button"
                      className={classes(buttonStyle.button, buttonStyle.buttonPrimary)}
                      onClick={boundConfirmAction}>
                {confirmButtonText}
              </button>
            ))}
      {condView(showCancelButton, (
         <button type="button"
                 className={classes(buttonStyle.button, buttonStyle.buttonSecondary)}
                 onClick={boundCancelAction}>
           {cancelButtonText}
         </button>
       ))}
         </div>
       ))}
    </Modal>
  )
}

export default connect(
  selector.mapStateToProps,
  selector.mapDispatchToProps
)(Alert)
