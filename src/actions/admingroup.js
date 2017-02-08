import { compose } from 'redux'
import * as actionType from 'type/admingroup'
import api from 'store/datastore'
import { setValue, clearValue } from 'action/textfield'
import * as modalActionType from 'type/modal'
import * as modalAction from 'action/modal'
import * as alertAction from 'action/alert'
import { EnsureDeleteModal } from 'container/AdminGroups/List'


// FETCH ADMINGROUP

// export const fetchAdminGroup = _ => dispatch => {
//   dispatch(requestAdminGroup)

//   api.findAll('admingroup')
//     .then(compose(dispatch, receviceAdminGroupSuccess))
//     .catch(compose(dispatch, receviceAdminGroupFailure))
// }


export const fetchAdminGroup = () => dispatch => {
  dispatch({
    type: '@@api/GET admingroup',
  })
}


// CREATE ADMINGROUP

// export const createAdminGroup = admingroup => dispatch => {
//   dispatch(requestCreateAdminGroup)

//   api.create('admingroup', admingroup)
//     //.then(store.create('admingroup'))
//     //.then(res => store.create('admingroup', res))
//     .then(compose(dispatch, createAdminGroupSuccess))
//     .catch(compose(dispatch, createAdminGroupFailure))
//     .then(compose(dispatch, clearValue('ADMINGROUP_NAME')))
//     .then(compose(dispatch, clearValue('ADMINGROUP_DESC')))
// }

export const createAdminGroup = admingroup => dispatch => {
  dispatch({
    type: '@@api/POST admingroup',
    payload: admingroup
  })
    .then(compose(dispatch, clearValue('ADMINGROUP_NAME')))
    .then(compose(dispatch, clearValue('ADMINGROUP_DESC')))
}


// DELETE ADMINGROUP

export const deleteAdminGroup = id => dispatch => {
  dispatch({
    type: `@@api/DELETE admingroup/${id}`
  })
}

export const requestDelete = admingroup => dispatch => {
  dispatch({
    type: actionType.DELETE_ADMINGROUP,
    payload: {
      admingroup: admingroup
    }
  })
  dispatch(modalAction.openModal())
}

// UPDATE ADMINGROUP

const requestUpdateAdminGroup = _ => ({
  type: actionType.UPDATE_ADMINGROUP
})

const updateAdminGroupSuccess = admingroup => _ => {
  return {
    type: actionType.UPDATE_ADMINGROUP_SUCCESS,
    payload: {
      admingroup: admingroup
    }
  }
}

const updateAdminGroupFailure = err => {
  throw new Error(err)
  return {
    type: actionType.UPDATE_ADMINGROUP_FAILURE,
  }
}

/*
export const updateAdminGroup = admingroup => dispatch => {
  dispatch(requestUpdateAdminGroup)

  const { id } = admingroup
  api.update('admingroup', id, admingroup)
    .then(compose(dispatch, updateAdminGroupSuccess(admingroup)))
    .catch(compose(dispatch, updateAdminGroupFailure))
    .then(compose(dispatch, clearValue('ADMINGROUP_NAME')))
    .then(compose(dispatch, clearValue('ADMINGROUP_DESC')))
}
*/


export const updateAdminGroup = admingroup => dispatch => {
  dispatch({
    type: `@@api/PUT admingroup/${admingroup.id}`,
    payload: admingroup
  })
    .then(compose(dispatch, clearValue('ADMINGROUP_NAME')))
    .then(compose(dispatch, clearValue('ADMINGROUP_DESC')))
}

export const editAdminGroup = admingroup => dispatch => {
  const { id, name, description } = admingroup
  dispatch(setValue('ADMINGROUP_NAME')(name))
  dispatch(setValue('ADMINGROUP_DESC')(description))
  dispatch({
    type: actionType.EDIT_ADMINGROUP,
    payload: {
      admingroup: admingroup
    }
  })
}

export const cancelAdminGroup = _ => dispatch => {
  dispatch(clearValue('ADMINGROUP_NAME')(''))
  dispatch(clearValue('ADMINGROUP_DESC')(''))
  dispatch({
    type: actionType.CANCEL_ADMINGROUP
  })
}
