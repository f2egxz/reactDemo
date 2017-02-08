//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * route.js
 *
 * 路由定义，app容器路由包括：
 * 1.程序总面板 Home（受保护）
 * 2.登录页 Signin
 * 3.404路由 NoMatch
 *
 * @author fe.yf <631190613@qq.com>
 */

import { pickModule } from 'util/module-extra'

export default process.env.NODE_ENV === 'production' ?
  pickModule(require('route/app/prod')) :
  pickModule(require('route/app/dev'))
