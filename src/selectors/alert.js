//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * alert.js
 *
 * 弹出提示框
 *
 * @author fe.yf <631190613@qq.com>
 */

import { bindActionCreators } from 'redux'
import * as action from 'action/alert'
import { getOrElse } from 'util/collection-extra'

function mapSizeToProps(modal) {
  return getOrElse({
      ...modal,
    style: {
        ...modal.style,
      content: {
          ...modal.style.content,
        width:  modal.width,
        height: modal.height
      }
    }
  })
}

export function mapStateToProps(state) {
  return {
    modal: mapSizeToProps(state.modal)
  }
}

export function mapDispatchToProps(dispatch) {
  console.log(bindActionCreators(action, dispatch))
  return bindActionCreators(action, dispatch)
}
