//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * Pagination.jsx
 *
 * 分页组件
 *
 * -  TODO 显示所有页数的下拉菜单
 * -  TODO 隐藏部分页码的下拉菜单
 *
 * @author fe.gxz
 */

import React,{Component}  from 'react'
import { classnames }     from 'util/view-extra'
import Styles             from 'style/Pagination.css'

/**
 * Pagination
 *
 * 分页组件
 *
 * @param {number} total
 * @param {number} pageSize
 * @param {number} current
 * @param {number} maxShowPage
 * @param {func} onChange
 *
 *
 */
class Pagination extends Component {
  constructor(){
    super()
  }
  render(){
    const {total,pageSize,current,maxShowPage} = this.props;
    const pageNum = Math.ceil(total/pageSize);
    if(pageNum>maxShowPage){
      return (
        <ul className={classnames(Styles.defaultUl)}>
          <li className={classnames(Styles.defaultLi,current===1?Styles.lose:'')}
              onClick={this.handleBack.bind(this)}
          >	&lt;</li>
          <li className={this.MapCurrentToStyle (current,1)}
              onClick={this.handlePage.bind(this)}
          >1</li>
          {current > 3 ?
            <li className={classnames(Styles.defaultLi,Styles.more,Styles.moreLt)}
                onClick={this.handleBack.bind(this)}
            ></li>
            :''
          }
          <li className={this.MapCurrentToStyle (current,2,pageNum)}
              onClick={this.handlePage.bind(this)}
          > {current > 3&&current < pageNum-2 ?current-1:current < 4 ? 2 : pageNum-3}</li>
          <li className={this.MapCurrentToStyle (current,3,pageNum)}
              onClick={this.handlePage.bind(this)}
          > {current > 3&&current < pageNum-2 ?current  :current < 4 ? 3 : pageNum-2}</li>
          <li className={this.MapCurrentToStyle (current,4,pageNum)}
              onClick={this.handlePage.bind(this)}
          > {current > 3&&current < pageNum-2 ?current+1:current < 4 ? 4 : pageNum-1}</li>
          {current < pageNum-2 ?
            <li  className={classnames(Styles.defaultLi,Styles.more,Styles.moreRt)}
                                      onClick={this.handleGo.bind(this)}
            ></li>
            :''
          }
          <li className={this.MapCurrentToStyle (current,pageNum,pageNum)}
              onClick={this.handlePage.bind(this)}
          >{pageNum}</li>
          <li className={classnames(Styles.defaultLi,current===pageNum?Styles.lose:'')}
              onClick={this.handleGo.bind(this)}
          >	&gt;</li>
        </ul>
      )
    }else{
      let page = [];
      for(let i=1;i<=pageNum;i++){
        page.push(<li key={i} className={this.MapCurrentToStyle (current,i)} onClick={this.handlePage.bind(this)}>{i}</li>)
      }
      return (
        <ul className={classnames(Styles.defaultUl)}>
          <li className={classnames(Styles.defaultLi,current===1?Styles.lose:'')}
              onClick={this.handleBack.bind(this)}
          >	&lt;</li>
          {page}
          <li className={classnames(Styles.defaultLi,current===pageNum?Styles.lose:'')}
              onClick={this.handleGo.bind(this)}
          >	&gt;</li>
        </ul>
      )
    }
  }

  /**
   * 根据当前选中页确定样式
   * @param current
   * @param num
   * @param pageNum
   * @return {*}
   * @constructor
   */
  MapCurrentToStyle(current,num,pageNum=0){
    if(pageNum===0){
      //不省略页码时
      if(current===num){
        return classnames(Styles.defaultLi,Styles.current);
      }else {
        return classnames(Styles.defaultLi)
      }
    }else {
      //有页码隐藏时
      if(current===num&&(num<4||num===pageNum)){
        return classnames(Styles.defaultLi,Styles.current);
      }else if(current > 3 && current < pageNum-2 && num===3){
        return classnames(Styles.defaultLi,Styles.current)
      }else if(current === pageNum-2 && current>3 && num===3){
        return classnames(Styles.defaultLi,Styles.current)
      }else if(current === pageNum-1 && current>3 && num===4){
        return classnames(Styles.defaultLi,Styles.current)
      }else {
        return classnames(Styles.defaultLi)
      }
    }
  }
  handleBack(){
    const {current,onChange} = this.props
    current>1? onChange(current-1):''
  }
  handleGo(){
    const {total,pageSize,current,onChange} = this.props
    const pageNum = total/pageSize;
    current<pageNum? onChange(current+1):''
  }
  handlePage(e){
    const page =parseInt( e.target.innerText);
    const {current,onChange} = this.props;
    current!==page? onChange(page):''
  }
}

Pagination.defaultProps = {
  pageSize: 10,
  maxShowPage: 8
}

Pagination.PropTypes = {
  onChange:React.PropTypes.func.isRequired,
  total:React.PropTypes.number.isRequired,
  pageSize:React.PropTypes.number,
  current:React.PropTypes.number.isRequired,
  maxShowPage:React.PropTypes.number
}

export default Pagination
