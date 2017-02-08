//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * dashboard.js
 *
 * 控制台首页
 *
 * @author fe.yf <631190613@qq.com>
 */

import { pickModule } from 'util/module-extra'

export default process.env.NODE_ENV === 'production' ?
  pickModule(require('route/dashboard/prod')) :
  pickModule(require('route/dashboard/dev'))
