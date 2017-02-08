//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * confirmModal.jsx
 *
 * 确认框
 *
 * @author fe.yf <631190613@qq.com>
 */

import * as action from 'action/modal'

export function mapStateToProps(state) {
  return {
    confirmHandle: state.modal.confirmHandle
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    confirm: handle => dispatch(action.confirmModal(handle)),
    cancel:  () => dispatch(action.cancelModal())
  }
}
