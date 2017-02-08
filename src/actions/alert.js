//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * alert.js
 *
 * 弹出提示框
 *
 * @author fe.yf <631190613@qq.com>
 */

import * as ActionType  from 'type/alert'
import { closeModal }   from 'action/modal'
import { constFn }      from 'util/function-extra'

const pressButton = type => (handle = constFn()) => dispatch => {
  dispatch({ type: ActionType[type] })
  handle && handle()
  dispatch(closeModal())
}

export const pressOkButton      = pressButton(ActionType.PRESS_ALERT_OK_BUTTON)
export const pressCancelButton  = pressButton(ActionType.PRESS_ALERT_CANCEL_BUTTON)
export const pressConfirmButton = pressButton(ActionType.PRESS_ALERT_COMFIRM_BUTTON)
