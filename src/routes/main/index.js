//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * main.js
 *
 * 面板容器，模块宿主，包括模块：
 * 1. System 系统配置
 *
 * @author fe.yf <631190613@qq.com>
 */

import { pickModule } from 'util/module-extra'

export default process.env.NODE_ENV === 'production' ?
  pickModule(require('route/main/prod')) :
  pickModule(require('route/main/dev'))
