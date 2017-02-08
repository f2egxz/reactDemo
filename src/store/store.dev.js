//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * store.dev.js
 *
 * store开发环境配置
 *
 * @author fe.yf <631190613@qq.com>
 */

import { createStore, compose } from 'redux'
//import DevTools                 from 'container/DevTools'
import reducers                 from 'reducer'
import middlewares              from 'middleware'

const composeEnhancers =
      process.env.NODE_ENV !== 'production' &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : compose

// const enhancer = compose(
//   middlewares,
//   DevTools.instrument()
// )

const enhancer = composeEnhancers(
  middlewares
)

export default createStore(reducers, enhancer)
