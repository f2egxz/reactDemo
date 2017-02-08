//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * route.dev.js
 *
 * @author fe.yf <631190613@qq.com>
 */

import { pickModule }  from 'util/module-extra'

export default {
  component: pickModule(require('container/App')),
  childRoutes: [
    pickModule(require('route/main')),
    pickModule(require('route/login')),
    pickModule(require('route/miss'))
  ],
  indexRoute: {
    onEnter: (_, replace) => replace('/')
  }
}
