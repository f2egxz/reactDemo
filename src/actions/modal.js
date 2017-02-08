//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * modal.js
 *
 * 弹出框
 *
 * @author fe.yf <631190613@qq.com>
 */

import * as actionType from 'type/modal'

export const openModal = confirmOptions => {
  return {
    type: actionType.OPEN_MODAL,
    payload: {
      isOpen: true
    }
  }
}

export const closeModal = _ => dispatch => {
  return dispatch({
    type: actionType.CLOSE_MODAL
  })
}

export const confirmModal = handle => dispatch => {
  dispatch(closeModal())
  handle && handle()
}

export const cancelModal = _ => dispatch => {
  dispatch(closeModal())
}
