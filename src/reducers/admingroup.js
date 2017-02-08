import { combineReducers } from 'redux'
import textFieldReducer from 'reducer/textfield'
import * as actionType from 'type/admingroup'


export const initState = {
  form: null,
  isEdit: false,
  editId: -1
}

const reducer = (state = initState, { type, payload = {} }) => {
  switch(type) {
  case actionType.FETCH_ADMINGROUP: {
    return state
  }
  case actionType.RECEVICE_ADMINGROUP_SUCCESS: {
    return state
  }
  case actionType.RECEVICE_ADMINGROUP_FAILURE: {
    return state
  }
  case actionType.CREATE_ADMINGROUP: {
    return state
  }
  case actionType.CREATE_ADMINGROUP_SUCCESS: {
    return state
  }
  case actionType.CREATE_ADMINGROUP_FAILURE: {
    return state
  }
  case actionType.DELETE_ADMINGROUP: {
    return Object.assign({}, state, {
      editId: payload.admingroup.id
    })
  }
  case actionType.DELETE_ADMINGROUP_SUCCESS: {
    return state
  }
  case actionType.DELETE_ADMINGROUP_FAILURE: {
    return state
  }
  case actionType.UPDATE_ADMINGROUP: {
    return state
  }
  case actionType.UPDATE_ADMINGROUP_SUCCESS: {
    return Object.assign({}, state, {
      isEdit: false,
      editId: -1
    })
  }
  case actionType.UPDATE_ADMINGROUP_FAILURE: {
    return state
  }
  case actionType.EDIT_ADMINGROUP: {
    return Object.assign({}, state, {
      isEdit: true,
      editId: payload.admingroup.id
    })
  }
  case actionType.CANCEL_ADMINGROUP: {
    return Object.assign({}, state, {
      isEdit: false,
      editId: -1
    })
  }
  default: {
    return state
  }
  }
}

export default combineReducers({
  name: textFieldReducer('ADMINGROUP_NAME'),
  desc: textFieldReducer('ADMINGROUP_DESC'),
  data: reducer
})
