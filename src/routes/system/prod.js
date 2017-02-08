//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * system.prod.js
 *
 * @author fe.yf <631190613@qq.com>
 */

import { importRoute } from 'util/route-extra'

export default {
  path: 'system',
  getComponent(_, cb) {
    cb(null, import('component/Container').BaseContainer)
  },
  getChildRoutes(_, cb) {
    importRoute(cb, [
      import('route/adminGroups'),
    ])
  },
  getIndexRoute(_, cb) {
    importRoute(cb, import('route/dashboard'))
  }
}
