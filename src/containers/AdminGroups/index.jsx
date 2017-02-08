//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * AdminGroup.jsx
 *
 * 管理员组容器
 *
 * @author fe.yf <631190613@qq.com>
 */

import React       from 'react'
import { connect } from 'react-redux'

export function AdminGroupsContainer({ children }) {
  return (
    <div id="admingroupsContainer">{children}</div>
  )
}

export default AdminGroupsContainer
