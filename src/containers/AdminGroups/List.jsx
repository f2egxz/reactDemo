//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * AdminGroup.jsx
 *
 * 管理员组
 *
 * @author fe.yf <631190613@qq.com>
 */

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { mapStateToProps, mapDispatchToProps } from 'selector/admingroup'
import ConfirmModal from 'container/confirmModal'
import Modal from 'react-modal'
import Alert from 'container/Alert'
import Button from 'component/Button'

//const NewAdminGroupButton = connectButton('NEW_ADMINGROUP')

/* import TextField from 'component/TextField'
 * import * as textFieldSelector from 'selector/textfield'*/

/* const NameTextField = connect(
 *   textFieldSelector.mapStateToProps(state => state.adminGroup.name),
 *   textFieldSelector.mapDispatchToProps('ADMINGROUP_NAME')
 * )(TextField)
 *
 * const DescTextField = connect(
 *   textFieldSelector.mapStateToProps(state => state.adminGroup.desc),
 *   textFieldSelector.mapDispatchToProps('ADMINGROUP_DESC')
 * )(TextField)*/

export const EnsureDeleteModal = function() {
    return (
      <ConfirmModal>
        确定删除？
      </ConfirmModal>
    )
  }

export class AdminGroup extends PureComponent {
  componentDidMount() {
    const { fetchAdminGroup } = this.props
    fetchAdminGroup()
  }
  render() {
    const {
      modal,
      admingroups = [],
      isEdit = false,
      editId = -1,
      name = '',
      desc = '',
      createAdminGroup,
      deleteAdminGroup,
      updateAdminGroup,
      editAdminGroup,
      cancelAdminGroup,
      requestDelete
    } = this.props

    return (
      <div>
        <h3>
          管理员组
        </h3>

        <div>
          {/* <div>
              <div>名称</div>
              <NameTextField />
              </div>
              <div>
              <div>描述</div>
              <DescTextField />
              </div> */}
          <div>
            {/* <button onClick={ _ => !isEdit ? createAdminGroup({ name: name, description: desc }) : updateAdminGroup({ id: editId, name: name, description: desc }) }>
                { !isEdit ? '添加' : '修改' }

            </button>
              */}
        <Button to="/system/admingroups/new" text="添加群组" />
            {
              isEdit ? (
                <button onClick={cancelAdminGroup}>取消</button>
              ) : null
            }
          </div>
        </div>

        {
          admingroups.length > 0 ?
          (
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>id</th>
                  <th>名称</th>
                  <th>描述</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {
                  admingroups.map((n, idx) => (
                    <tr key={`admingroup-${idx}`}>
                      <td>{ idx + 1 }</td>
                      <td>{ n.id }</td>
                      <td>{ n.name }</td>
                      <td>{ n.description }</td>
                      <td>
                        <button onClick={_ => editAdminGroup(n)}>编辑</button>
                        <button onClick={_ => requestDelete(n)}>删除</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          ) : (
            <div>暂无数据</div>
          )
        }

        <Alert closeOnConfirm={() => deleteAdminGroup(editId)}
               title={"确认删除管理员组"}
               showConfirmButton={true}
               showCancelButton={true}
               confirmButtonText={"Ok, fuck it!"}
               cancelButtonText={"Do it later."} >
          Would you like to fuck the {editId} ?
        </Alert>

        {/* <Modal {...modal}>
            <ConfirmModal confirmHandle={() => deleteAdminGroup(editId)}>
            Would you fuck {editId} ?
            </ConfirmModal>
            </Modal> */}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminGroup)
