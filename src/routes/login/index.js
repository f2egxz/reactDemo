//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * signin.js
 *
 * 登录页，访问受保护的路由会自动跳转到登陆页，获取token后不需要再次登录
 * 登录采用jwt验证方式，客户端持久化token
 *
 * @author fe.yf <631190613@qq.com>
 */

import { pickModule } from 'util/module-extra'

export default process.env.NODE_ENV === 'production' ?
  pickModule(require('route/login/prod')) :
  pickModule(require('route/login/dev'))
