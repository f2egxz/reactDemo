import * as actionType from 'type/signin'
import * as action from 'action/textfield'

export const changeUsername = (evt) => {
  const { payload } = action.changeValue(evt)
  return {
    type: actionType['USERNAME_TEXTFIELD_VALUE_CHANGE'],
    payload: {
      username: payload.value
    }
  }
}

export const changePassword = (evt) => {
  const { payload } = action.changeValue(evt)
  return {
    type: actionType['PASSWORD_TEXTFIELD_VALUE_CHANGE'],
    payload: {
      password: payload.value
    }
  }
}
