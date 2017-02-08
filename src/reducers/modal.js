//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * modal.js
 *
 * 弹出框
 *
 * @author fe.yf <631190613@qq.com>
 */

import * as ActionType   from 'type/modal'
import { getOrElse }     from 'util/collection-extra'
import { createReducer } from 'util/reducer-extra'

export const initState = {
  isOpen: false,
  width: 270,
  height: 320,
  contentLabel: 'Modal',
  style: {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.28)'
    },
    content: {
      borderRadius: '2px',
      transform: 'translate3d(-50%, -50%, 0)',
      left: '50%',
      top: '50%',
      bottom: 'auto',
      right: 'auto'
    }
  }
}


function toggleModal(state, payload, isOpen) {
  return getOrElse(state, {
    isOpen: isOpen === undefined ? !state.isOpen : isOpen,
    ...payload
  })
}

export default createReducer(initState, {

  // 打开modal
  [ActionType.OPEN_MODAL](state, action) {
    return toggleModal(state, action.payload, true)
  },

  // 关闭modal
  [ActionType.CLOSE_MODAL](state, action) {
    return toggleModal(state, action.payload, false)
  }
})
