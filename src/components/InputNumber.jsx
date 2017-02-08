// -*- mode: react -*-
// -*- coding: utf-8 -*-

/**
 *InputNumber.jsx
 *
 * 数字输入框组件
 *
 * -TODO 数字输入框，可以设置最大值、最小值、每次改变步数、初始值、禁用
 *
 * @author fe.gxz
 */

import React              from 'react';
import { classnames }     from 'util/view-extra'
import Styles             from 'style/InputNumber.css'

/**
 * InputNumber
 *
 * @param {number} min,
 * @param {number} max,
 * @param {number} value,
 * @param {number} step,
 * @param {bool} disabled
 *
 */
class InputNumber extends React.Component {
  constructor(props){
    super()
    this.clickdown = this.clickdown.bind(this)
    this.clickup = this.clickup.bind(this);
    this.changeInput = this.changeInput.bind(this)
    this.state= {
      lastValue:props.value,
      value:props.value,
      show:false,
      focus:false,
      inputNum:props.value,
    }
  }
  componentDidUpdate(){
    if(this.state.lastValue!==this.state.value){
      const {onChange} = this.props;
      onChange(this.state.value)
    }
  }
  render(){
    const {disabled} =this.props;
    return (
      <div className={classnames(Styles.inputNumber,disabled?Styles.disabled:'',this.state.focus?Styles.inputNumbeActive:'')}
           onKeyDown={this.onKeyDown.bind(this)}
           onMouseEnter={this.showarrow.bind(this)}
           onMouseLeave={this.hidearrow.bind(this)}
           onFocus={this.onfocus.bind(this)}
           onBlur={this.onBlur.bind(this)}
      >
        <input type="text" className={classnames(Styles.input,disabled?Styles.disabled:'')}
               value={this.state.inputNum}   onChange={this.changeInput}/>
        {this.state.show&&!disabled?<div className={classnames(Styles.arrowbox)}>
            <span className={classnames(Styles.arrow,Styles.arrowup)}
                  onClick={this.clickup}
            >▲</span>
            <span className={classnames(Styles.arrow ,Styles.arrowdown)}
                  onClick={this.clickdown}
            >▼</span>
          </div>:''}
      </div>
    )
  }
  changeInput(e){
    const num = e.target.value;
    this.setState({
      inputNum:num,
    })
  }

  getPrecision (){
    const {step} = this.props
    const stepString = step+''
    let precision = 0;
    if (stepString.indexOf('.') >= 0) {
      precision = stepString.length - stepString.indexOf('.') - 1;
    }
    return precision
  }

  toPrecisionAsStep(num) {
    if (isNaN(num) || num === '') {
      return num;
    }
    const precision = this.getPrecision();
    return Number(Number(num).toFixed(precision));
  }

  clickup(){
    const {max,step} = this.props;
    const num = this.toPrecisionAsStep(this.state.value+step);
    this.state.value+step<max?
      this.setState({
        inputNum:num,
        value:num,
        lastValue:this.state.value
      }):''
  }

  clickdown(){
    const {min,step} = this.props
    const num = this.toPrecisionAsStep(this.state.value-step)
    this.state.value-step>min?
    this.setState({
      inputNum:num,
      value:num,
      lastValue:this.state.value
    }):''
  }
  onKeyDown(e) {
    if (e.keyCode === 38) {
      this.clickup(e);
    } else if (e.keyCode === 40) {
      this.clickdown(e);
    }
  }
  showarrow(){
    this.setState({
      show:true,
      lastValue:this.state.value
    })
  }
  hidearrow(){
    this.setState({
      show:false,
      lastValue:this.state.value
    })
  }
  onfocus(){
    this.setState({
      focus:true
    })
  }
  onBlur(){
    const num =this.state.inputNum;
    let value;
    isNaN(Number(num))? value = this.state.value : value = Number(num);
    this.setState({
      inputNum:value,
      value:value,
      focus:false
    })
  }
}
InputNumber.defaultProps = {
  min:-Infinity,
  max:Infinity,
  value:'',
  step:1,
  disabled:false
}

InputNumber.PropTypes = {
  min:      React.PropTypes.number,
  max:      React.PropTypes.number,
  value:    React.PropTypes.number,
  step:     React.PropTypes.number,
  disabled: React.PropTypes.bool
}


export default InputNumber

