//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * signin.dev.js
 *
 * @author fe.yf <631190613@qq.com>
 */

import { pickModule } from 'util/module-extra'

export default {
  path: 'signin',
  component: pickModule(require('container/Login'))
}
