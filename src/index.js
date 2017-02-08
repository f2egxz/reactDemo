//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * index.js
 *
 * 应用程序入口
 *
 * @desc 不要修改此文件
 * @author fe.yf <631190613@qq.com>
 */

import React                      from 'react'
import { Provider }               from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore }   from 'react-router-redux'
import store                      from 'store'
import routes                     from 'route'
import 'normalize.css/normalize'
import 'style/global'

const history = syncHistoryWithStore(browserHistory, store)

export default function Boot() {
  return (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  )
}
