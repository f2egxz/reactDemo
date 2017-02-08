//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * reducer.js
 *
 * reducer定义
 *
 * @author fe.yf <631190613@qq.com>
 */

import { combineReducers } from 'redux'
import { routerReducer }   from 'react-router-redux'
import appReducer          from 'reducer/app'
import signinReducer       from 'reducer/signin'
import adminGroupReducer   from 'reducer/admingroup'
import dataReducer         from 'reducer/data'
import modalReducer        from 'reducer/modal'


export default combineReducers({
  app:        appReducer,
  data:       dataReducer,
  modal:      modalReducer,
  routing:    routerReducer,
  signin:     signinReducer,
  adminGroup: adminGroupReducer
})
