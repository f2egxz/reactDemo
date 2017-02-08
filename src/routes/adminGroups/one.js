//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * adminGroups/one.js
 *
 * 管理员组详情
 *
 * @author fe.yf <631190613@qq.com>
 */

import { pickModule }  from 'util/module-extra'

export default {
  path: ':id',
  component: pickModule(require('container/AdminGroups/One'))
}
