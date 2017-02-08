//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * middleware.js
 *
 * 中间件配置
 *
 * @author fe.yf <631190613@qq.com>
 */

export default process.env.NODE_ENV === 'production' ?
  require('middleware/prod').default :
  require('middleware/dev').default
