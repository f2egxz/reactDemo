//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * ConfirmModal.jsx
 *
 * 确认框
 *
 * @author fe.yf <631190613@qq.com>
 */

import React         from 'react'
import { compose }   from 'redux'
import { connect }   from 'react-redux'
import * as selector from 'selector/confirmModal'

export function ConfirmModal({ children, confirmHandle, confirm, cancel }) {

  const thunkConfirmAction = () => confirm(confirmHandle)

  return (
    <div>

      { children }

      {/* Alert action buttons. */}
      <button type="button" onClick={thunkConfirmAction}>
        确定
      </button>
      <button type="button" onClick={cancel}>
        取消
      </button>
    </div>
  )
}

export default connect(
  undefined,
  selector.mapDispatchToProps
)(ConfirmModal)
