//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * main.prod.js
 *
 * @author fe.yf <631190613@qq.com>
 */

import { importRoute } from 'util/route-extra'

export default {
  path: '/',
  getComponent(_, cb) {
    importRoute(cb, import('container/Main'))
  },
  getChildRoutes(_, cb) {
    importRoute(cb, [
      import('route/system'),
    ])
  },
  getIndexRoute(_, cb) {
    importRoute(cb, import('route/dashboard'))
  }
}
