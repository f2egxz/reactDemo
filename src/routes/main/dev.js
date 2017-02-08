//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * main.dev.js
 *
 * @author fe.yf <631190613@qq.com>
 */

import { pickModule }  from 'util/module-extra'

export default {
  path: '/',
  component: pickModule(require('container/Main')),
  childRoutes: [
    pickModule(require('route/system')),
  ],
  indexRoute: pickModule(require('route/dashboard'))
}
