//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * store.prod.js
 *
 * 部署环境store定义
 *
 * @desc 不要修改此文件
 * @author fe.yf <631190613@qq.com>
 */

import { createStore } from 'redux'
import reducers        from 'reducer'
import middlewares     from 'middleware'

export default createStore(reducers, middlewares)
