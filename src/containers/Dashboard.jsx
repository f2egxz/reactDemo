//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * Dashboard.jsx
 *
 * 控制台首页
 *
 * @author fe.yf <631190613@qq.com>
 */

import React, { PureComponent } from 'react'
import Icon               from 'component/Icon'
import InputNumber        from 'component/InputNumber.jsx'
import Pagination         from 'component/Pagination.jsx'
// import CheckboxGroup      from 'component/Checkbox.jsx'
import CheckboxGroup      from 'component/Checkbox.js'

export class Dashboard extends PureComponent {
  constructor(){
    super()
    this.state={
      bool:false,
      current:3
    }
  }

  render() {
    return (
      <div>
        <h3>
          控制面板
        </h3>
        <Icon name='test' />
        <hr/>
        <CheckboxGroup options={["test","测试","默认选中","不可获得的"]} onChange={this.handleClick} defaultValue={["默认选中","测试"]} disabled={["不可获得的"]}/>
        <hr/>
        <Pagination total={233} current={this.state.current} onChange={this.pageClick.bind(this)}/>
        <hr/>
        <InputNumber value={2} step={0.2} max={6} min={-3} onChange = {this.handleClick}/>
      </div>
    )
  }
  pageClick(page){
    console.log('page:'+page)
    this.setState({
      current:page
    })
  }
  handleClick(text){
    console.log(text);
  }
}

export default Dashboard
