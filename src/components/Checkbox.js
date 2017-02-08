// -*- mode： react-*-
// -*- coding: utf-8-*-

/**
 * Checkbox.jsx
 *
 * 多选框组件
 *
 * -TODO 多选框
 *
 * @author fe.gxz
 */




import React from 'react'
import { classnames }     from 'util/view-extra'
import Styles from 'style/checkbox.css'



export class CheckBox extends React.Component {
  constructor(props){
    super()
    this.handleToggle = this.handleToggle.bind(this)
    this.state ={}
  }

  render(){
    const {checked,value,disabled} = this.props;
    return (
      <label className={classnames(Styles.box)}>
        <input type="checkbox"
               value={value}
               disabled={disabled.indexOf(value) !== -1}
               checked ={checked.indexOf(value) !== -1 }
               onChange={this.handleToggle}
               className={Styles.input}
        />
        <span>{value}</span>
      </label>
    )
  }

  handleToggle(evt){
    this.props.onChange(evt.target.value,evt.target.checked)
  }
}

/**
 * CheckboxGroup
 *
 * 多选框
 *
 * @param {array} options
 * @param {fn} onChange(value,checked)
 * @param {array} defaultValue
 * @param {array} disabled
 *
 */
class CheckboxGroup extends React.Component {
  constructor(props){
    super()
    this.handleClick=this.handleClick.bind(this)
    this.state={
      checked : props.defaultValue,
    }
  }

  componentDidUpdate(){
    this.props.onChange(this.state.checked)
  }

  render(){
    const {options,disabled} = this.props
    return (
      <div className={classnames(Styles.span)}>
        {options.map(option=>(
          <CheckBox
            key = {option}
            value = {option.toString()}
            disabled = {disabled}
            checked = {this.state.checked}
            onChange={this.handleClick}
          />
        ))}
      </div>
    )
  }

  handleClick(value){
    let { checked } = this.state
    if(checked.indexOf(value) === -1) {
      checked.push(value)
    }else {
      checked  = checked.filter(i => i !== value)

    }
    this.setState({
      checked
    })
  }
}

CheckboxGroup.propTypes = {
  options :　React.PropTypes.array.isRequired,
  onChange : React.PropTypes.func.isRequired,
  defaultValue : React.PropTypes.array,
  disabled : React.PropTypes.array
}

export default CheckboxGroup;
