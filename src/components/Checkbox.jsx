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
    this.state ={
      value:'',
      checked:false,
      disabled:false
    }
  }
  componentWillMount(){
    const { option } = this.props;
    this.state.value = option.value;
    this.state.checked = option.checked;
    this.state.disabled = option.disabled
  }

  render(){
    const {value,checked,disabled} = this.state;
    return (
      <label className={classnames(Styles.box)}>
        <input type="checkbox"
               value={value}
               disabled={disabled}
               checked ={checked}
               onChange={this.handleToggle.bind(this)}
               className={Styles.input}
        />
        <span>{value}</span>
      </label>
    )
  }

  handleToggle(evt){
    this.setState({checked:!this.state.checked})
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
 * @param {fn} defaultValue
 * @param {array} disabled
 *
 */
class CheckboxGroup extends React.Component {
  constructor(props){
    super(props)
    this.state={}
  }

  componentWillMount(){
    const {options,defaultValue} = this.props
    let [defaultValues,disabled] = [[],[]]
    if(defaultValue){
      defaultValues = defaultValue
    }
    if(this.props.disabled){
      disabled = this.props.disabled
    }
    options.forEach(option=>this.state[option]={
      value: option,
      checked: false,
      disabled: false
    })
    defaultValues.forEach(option =>{if(this.state[option]){this.state[option].checked=true}})
    disabled.forEach(option =>{if(this.state[option]){this.state[option].disabled=true}})
  }

  render(){
    const {options,onChange} = this.props
    return (
      <div className={classnames(Styles.span)}>
        {options.map(option=>(
          <CheckBox
            key = {option}
            option={this.state[option]}
            onChange={onChange}
          />
        ))}
      </div>
    )
  }
}

CheckboxGroup.propTypes = {
  options :　React.PropTypes.array.isRequired,
  onChange : React.PropTypes.func.isRequired,
  defaultValue : React.PropTypes.array,
  disabled : React.PropTypes.array
}

export default CheckboxGroup;
