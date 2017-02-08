//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * nomatch.prod.js
 *
 * @author fe.yf <631190613@qq.com>
 */

import { importRoute } from 'util/route-extra'

export default {
  path: '*',
  getComponent(_, cb) {
    importRoute(cb, import('container/Miss'))
  }
}
