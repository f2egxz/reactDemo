//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * middleware.dev.js
 *
 * 开发环境中间件配置
 *
 * @author fe.yf <631190613@qq.com>
 */

import { applyMiddleware }  from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory }   from 'react-router'
import thunkMiddleware      from 'redux-thunk'
import loggerMiddleware     from 'redux-logger'
//import emoji                from 'node-emoji'
import apiMiddleware        from 'middleware/api'

export default applyMiddleware(
  apiMiddleware,
  thunkMiddleware,
  loggerMiddleware({
    collapsed: _ => true,
    titleFormatter: (action, time, took) => {
      //return `${emoji.get('star')} ${String(action.type)}`
      return action.type
    },
    colors: {
      title: action => '#87ceff;font-size: 10px'
    },
    //diff: true
  }),
  routerMiddleware(browserHistory),
)
