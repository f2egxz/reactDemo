//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * nomatch.dev.js
 *
 * @author fe.yf <631190613@qq.com>
 */

import { pickModule } from 'util/module-extra'

export default {
  path: '*',
  component: pickModule(require('container/Miss'))
}
