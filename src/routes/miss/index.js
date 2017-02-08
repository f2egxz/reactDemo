//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * nomatch.js
 *
 * 404路由，匹配未指定的所有路由
 *
 * @author fe.yf <631190613@qq.com>
 */

import { pickModule } from 'util/module-extra'

export default process.env.NODE_ENV === 'production' ?
  pickModule(require('route/miss/prod')) :
  pickModule(require('route/miss/dev'))
