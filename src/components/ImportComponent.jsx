//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * importComponent.jsx
 *
 * 异步加载组件，用于切割代码
 *
 * @highOrderComponent
 * @author fe.yf <631190613@qq.com>
 */

import React, { PureComponent } from 'react'

class ImportComponent extends PureComponent {
  constructor() {
    super()
    this.state = {
      isLoaded: false,
      modules: {}
    }
  }

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  componentWillReceiveProps(next) {
    if(next.modules === this.props.modules) return
    this.load(next)
  }

  componentWillMount() {
    this.load(this.props)
  }

  load({ modules }) {
    this.setState({
      isLoaded: false
    })

    console.log(modules)

    const keys = Object.keys(modules)

    Promise.all(keys.map(key => modules[key]()))
      .then(res => keys.reduce((acc, curr, idx) => {
        acc[curr] = res[idx]
        return acc;
      }, {}))
      .then(res => {
        if(!this._isMounted) return
        this.setState({ modules: res, isLoaded: true })
      })
  }

  render() {
    console.log(this.props.children, this.state.modules)
    if(!this.state.isLoaded) return null
    return React.Children.only(this.props.children(this.state.modules))
  }
}

ImportComponent.propTypes = {
  children: React.PropTypes.func.isRequired
}

export default function importComponent(Component, modules) {
  return function(props) {
    return (
      <ImportComponent modules={modules}>
        {modules => <Component {...modules} {...props} />}
      </ImportComponent>
    )
  }
}
