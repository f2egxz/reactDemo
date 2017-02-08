//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * dashboard.dev.js
 *
 * @author fe.yf <631190613@qq.com>
 */

import { pickModule }  from 'util/module-extra'

export default {
  component: pickModule(require('container/Dashboard'))
}
