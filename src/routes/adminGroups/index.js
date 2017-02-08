//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * adminGroups.js
 *
 * 管理员组，标准增删改查
 *
 * @author fe.yf <631190613@qq.com>
 */

import { pickModule }  from 'util/module-extra'

export default {
  path: 'admingroups',
  component: require('component/Container').BaseContainer,
  childRoutes: [
    pickModule(require('route/adminGroups/new')),
    pickModule(require('route/adminGroups/one')),
    pickModule(require('route/adminGroups/edit')),
  ],
  indexRoute: pickModule(require('route/adminGroups/list'))
}
