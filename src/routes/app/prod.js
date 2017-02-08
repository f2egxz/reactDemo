//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * route.prod.js
 *
 * @author fe.yf <631190613@qq.com>
 */

import { importRoute } from 'util/route-extra'

export default {
  getComponent(_, cb) {
    importRoute(cb, import('container/App'))
  },
  getChildRoutes(_, cb) {
    importRoute(cb, [
      import('route/main'),
      import('route/login'),
      import('route/miss')
    ])
  },
  getIndexRoute(_, cb) {
    cb(null, {
      onEnter: (_, replace) => replace('/')
    })
  }
}
