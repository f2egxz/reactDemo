import { compose } from 'redux'
import * as action from 'action/admingroup'

export const mapStateToProps = state => ({
  admingroups: state.data.admingroups,
  isEdit: state.adminGroup.data.isEdit,
  editId: state.adminGroup.data.editId,
  name: state.adminGroup.name.value,
  desc: state.adminGroup.desc.value,
  modal: Object.assign({}, state.modal, {
    style: {
        ...state.modal.style,
      content: {
          ...state.modal.style.content,
        width:  state.modal.width,
        height: state.modal.height
      }
    }
  })
})


export const mapDispatchToProps = dispatch => {
  return {
    fetchAdminGroup:  compose(dispatch, action.fetchAdminGroup),
    createAdminGroup: compose(dispatch, action.createAdminGroup),
    deleteAdminGroup: compose(dispatch, action.deleteAdminGroup),
    updateAdminGroup: compose(dispatch, action.updateAdminGroup),
    editAdminGroup:   compose(dispatch, action.editAdminGroup),
    cancelAdminGroup: compose(dispatch, action.cancelAdminGroup),
    requestDelete:    compose(dispatch, action.requestDelete),
  }
}
