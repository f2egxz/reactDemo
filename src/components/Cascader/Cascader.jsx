// -*- mode： react-*-
// -*- coding: utf-8-*-

/**
 * Cascader.jsx
 *
 * 联级选择组件
 *
 * -TODO 联级选择
 *
 * @author fe.gxz
 */

import React              from 'react';
import { classnames }     from 'util/view-extra'
import Styles             from 'style/Cascader.css'
import SelectMenu         from 'component/Cascader/SelectMenu.jsx'

/**
 * Cascader
 *
 * 联级选择组件
 *
 * @param {Array} options
 * @param {function} onChange
 *
 */
class Cascader extends React.Component {
  constructor(){
    super()
    this.state = {
      show:false,
      choose:'',
      close:false,
      placeholder:'Please Select',
    }
  }
  render(){
    const {options} = this.props;
    return (
      <div>
        <span className={classnames(Styles.inputBox)}
              onMouseEnter={()=>this.setState({close:true})}
              onMouseLeave={()=>this.setState({close:false})}
        >
          <input type="text" placeholder={this.state.placeholder}/>
          <span className={classnames(Styles.text)}
                onClick={this.handleClickShow.bind(this)}
          >{this.state.choose}</span>
          { this.state.choose !== '' && this.state.close?
            <i className = {Styles.close} onClick={this.handleClose.bind(this)}>x</i>
            : ''
          }
        </span>
        {this.state.show ? <SelectMenu options={options} sub = {true} onChange = {this.handleClick.bind(this)}/>:''}
        
      </div>
    )
  }
  handleClick(text){
    const {onChange} =this.props
    this.setState({
      choose:text,
      placeholder:'',
      show:false
    })
    onChange(text)
  }
  handleClickShow(){
    this.setState({
      show:!this.state.show
    })
  }
  handleClose(){
    const {onChange} =this.props
    this.setState({
      show:false,
      choose:'',
      close:false,
      placeholder:'Please Select',
    })
    onChange('')
  }
}

export default Cascader





