//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * adminGroups/list.js
 *
 * 管理员组列表
 *
 * @indexRoute
 * @author fe.yf <631190613@qq.com>
 */

import { pickModule }  from 'util/module-extra'

export default {
  component: pickModule(require('container/AdminGroups/List')),
}
