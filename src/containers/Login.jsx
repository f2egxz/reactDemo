//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * Signin.jsx
 *
 * 用户登录
 *
 * @author fe.yf <631190613@qq.com>
 */

import React, { PureComponent } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import TextField from 'component/TextField'
import * as action from 'action/textfield'

const UsernameTextField = connect(
  state => ({
    value: state.signin.username.value
  }),
  dispatch => ({
    changeHandle: compose(dispatch, action.changeValue('USERNAME'))
  })
)(TextField)

const PasswordTextField = connect(
  state => ({
    value: state.signin.password.value
  }),
  dispatch => ({
    changeHandle: compose(dispatch, action.changeValue('PASSWORD'))
  })
)(TextField)

export class Signin extends PureComponent {
  render() {
    const { username, changeHandle } = this.props

    return (
      <div>
        <h1>Signin</h1>
        <div><UsernameTextField />{username}</div>
        <div><PasswordTextField type="password" /></div>
        <button>登录</button>
        <Link to="/">back</Link>
      </div>
    )
  }
}

export default connect(state => ({
  username: state.signin.username.value
}))(Signin)
