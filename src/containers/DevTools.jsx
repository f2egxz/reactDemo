//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * DevTools.jsx
 *
 * 开发者工具
 *
 * @desc 不要修改此文件
 * @author fe.yf <631190613@qq.com>
 */

import React              from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor         from 'redux-devtools-log-monitor'
import DockMonitor        from 'redux-devtools-dock-monitor'


export default createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
               changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" />
  </DockMonitor>
)
