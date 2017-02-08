//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * dashboard.dev.js
 *
 * @author fe.yf <631190613@qq.com>
 */

import { importRoute } from 'util/route-extra'

export default {
  getComponent(_, cb) {
    importRoute(cb, import('container/Dashboard'))
  }
}
