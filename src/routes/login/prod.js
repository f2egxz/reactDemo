//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * signin.prod.js
 *
 * @author fe.yf <631190613@qq.com>
 */

import { importRoute } from 'util/route-extra'

export default {
  path: 'signin',
  getComponent(_, cb) {
    importRoute(cb, import('container/Login'))
  }
}
