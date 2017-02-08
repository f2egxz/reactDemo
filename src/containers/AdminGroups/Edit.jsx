//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * AdminGroupNew.jsx
 *
 * 编辑管理员组
 *
 * @author fe.yf <631190613@qq.com>
 */

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export class AdminGroupEdit extends PureComponent {
  componentDidMount() {
  }
  render() {
    return (
      <div>AdminGroupEdit</div>
    )
  }
}

export default connect()(AdminGroupEdit)
