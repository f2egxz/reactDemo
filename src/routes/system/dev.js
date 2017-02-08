//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * system.dev.js
 *
 * @author fe.yf <631190613@qq.com>
 */

import { pickModule }  from 'util/module-extra'

export default {
  path: 'system',
  component: require('component/Container').BaseContainer,
  indexRoute: pickModule(require('route/dashboard')),
  childRoutes: [
    pickModule(require('route/adminGroups')),
  ]
}
