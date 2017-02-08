//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * middleware.prod.js
 *
 * 部署环境中间件配置
 *
 * @author fe.yf <631190613@qq.com>
 */

import { applyMiddleware }  from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory }   from 'react-router'
import thunkMiddleware      from 'redux-thunk'
import apiMiddleware        from 'middleware/api'

export default applyMiddleware(
  apiMiddleware,
  thunkMiddleware,
  routerMiddleware(browserHistory),
)
