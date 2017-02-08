//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * Miss.jsx
 *
 * 404未匹配页面
 *
 * @desc 不要修改此文件
 * @author fe.yf <631190613@qq.com>
 */

import React               from 'react'
import { connect }         from 'react-redux'
import { replace, goBack } from 'react-router-redux'

export function Miss({ goBack, goHome }) {
  return (
    <div>
      <h1>404 Not Found</h1>
      <button type="button" onClick={goHome}>返回首页</button>
      <button type="button" onClick={goBack}>返回上一页</button>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    goBack: () => dispatch(goBack()),
    goHome: () => dispatch(replace('/'))
  }
}

export default connect(undefined, mapDispatchToProps)(Miss)
