//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * new.js
 *
 * 新增管理员组
 *
 * @author fe.yf <631190613@qq.com>
 */

import { pickModule }  from 'util/module-extra'

export default {
  path: ':id/edit',
  component: pickModule(require('container/AdminGroups/Edit')),
}
