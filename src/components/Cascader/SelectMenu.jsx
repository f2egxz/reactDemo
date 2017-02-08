// -*- mode： react-*-
// -*- coding: utf-8-*-

/**
 * Cascader.jsx
 *
 * 联级选择组件 的下拉框组件
 *
 * -TODO 下拉框列表
 *
 * @author fe.gxz
 */

import React              from 'react';
import { classnames }     from 'util/view-extra'
import MenuItem           from 'component/Cascader/SelectMenuitem.jsx'
import Styles             from 'style/Cascader.css'



class Menu extends React.Component {
  constructor(){
    super()
    this.state={
      stair:null,
      secondStage:null,
      threeStage:null,
      completed:false
    }
  }
  componentDidUpdate(){
    if(this.state.completed){
      const {onChange} = this.props
      const last = this.state.threeStage===null?'':this.state.threeStage+'/';
      const msg = this.state.stair+'/'+this.state.secondStage+'/'+last;
      onChange(msg)
    }
  }
  render(){
    const {options} =this.props
    const second = options.filter((item)=>(item.name===this.state.stair));
    const secondChildren = second[0]? second[0].sub:[]
    const three =  secondChildren.filter((item)=>(item.name===this.state.secondStage));
    const threeChildren = three[0]?three[0].sub:[]
    return (
      <div className = {classnames(Styles.menu)}>
        <MenuItem list = {options} choose={this.state.stair} onChange = {this.handleClickF.bind(this)}/>
        {this.state.stair!==null&&secondChildren!==null?  <MenuItem list={secondChildren} choose={this.state.secondStage} onChange = {this.handleClickS.bind(this)}/>:''}
        {this.state.secondStage!==null&&threeChildren!==null? <MenuItem list={threeChildren} choose={this.state.threeStage} onChange = {this.handleClickT.bind(this)}/>:''}
      </div>
    )
  }
  handleClickF(text,sub){
    this.setState({
      stair:text,
      secondStage:null,
      threeStage:null,
      completed:!sub
    })
  }
  handleClickS(text,sub){
    const {onChange} =this.props
    this.setState({
      secondStage:text,
      threeStage:null,
      completed:!sub
    })
  }
  handleClickT(text,sub){
    const {onChange} =this.props
    this.setState({
      threeStage:text,
      completed:!sub
    })
  }
}


export default Menu
