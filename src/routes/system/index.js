//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * system.js
 *
 * 系统设置
 *
 * @author fe.yf <631190613@qq.com>
 */

import { pickModule } from 'util/module-extra'

export default process.env.NODE_ENV === 'production' ?
  pickModule(require('route/system/prod')) :
  pickModule(require('route/system/dev'))
