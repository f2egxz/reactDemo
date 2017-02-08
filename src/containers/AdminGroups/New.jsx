//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * AdminGroupNew.jsx
 *
 * 新增管理员组
 *
 * @author fe.yf <631190613@qq.com>
 */

import React            from 'react'
import { compose }      from 'redux'
import { connect }      from 'react-redux'
import * as action      from 'action/admingroup'
import buttonStyle      from 'style/button'
import { classnames }   from 'util/view-extra'
import { replace }      from 'react-router-redux'
import connectTextField from 'component/TextField'
import { BackButton }   from 'component/Button'
import FormControl      from 'component/FromControl'
import Container        from 'component/Container'

const NameTextField = connectTextField(
  state => state.adminGroup.name,
  "ADMINGROUP_NAME"
)

const DescTextField = connectTextField(
  state => state.adminGroup.desc,
  "ADMINGROUP_DESC"
)


export function AdminGroupNew({ name,
                                desc,
                                cancelCreate,
                                createAdminGroup }) {

  // 构造record
  const boundCreateHandle = () => createAdminGroup({
    name:        name,
    description: desc
  })

  return (
    <Container margin center>
      <Container flex={0.4} padding>
        <h2>新建群组</h2>
        <p>
          测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
        </p>
      </Container>

      <Container flex={0.6} padding>
        {/* 名称输入 */}
        <FormControl label="名称" name="name">
          <NameTextField placeholder="组名" name="name" />
        </FormControl>

        {/* 详情输入 */}
        <FormControl label="组群详情" name="description">
          <DescTextField placeholder="群组详情说明" name="description" isArea={true} />
        </FormControl>

        <div>
          {/* 提交按钮 */}
          {/* <CreateButton text="创建管理员组" clickHandle={boundCreateHandle} /> */}

          {/* 返回列表页 */}
          <BackButton />
        </div>
      </Container>
    </Container>
  )
}

function mapStateToProps(state) {
  return {
    name: state.adminGroup.name.value,
    desc: state.adminGroup.desc.value,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createAdminGroup: compose(dispatch, action.createAdminGroup),
    cancelCreate: () => dispatch(replace('/system/admingroups'))
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminGroupNew)


/*
export default importComponent(connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminGroupNew), {
  BackButton: () => import('component/Button').then(res => res.BackButton),
  FormControl: () => import('component/FromControl').then(res => res.default)
})
*/
