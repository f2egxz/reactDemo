//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * store.js
 *
 * store定义
 *
 * @desc 不要修改此文件
 * @author fe.yf <631190613@qq.com>
 */

// import { createStore, compose } from 'redux'
// import DevTools                 from 'container/DevTools'
// import reducers                 from 'reducer'
// import middlewares              from 'middleware'

// const enhancer = compose(
//   middlewares,
//   DevTools.instrument()
// )

// export default createStore(reducers, enhancer)


export default process.env.NODE_ENV === 'production' ?
  require('./store.prod').default :
  require('./store.dev').default

