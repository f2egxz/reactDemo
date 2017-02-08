import { combineReducers } from 'redux'
import * as actionType from 'type/signin'
import textfieldReducer, { initState as textfieldInitState } from 'reducer/textfield'
import * as action from 'action/textfield'

export const initState = {
  username: textfieldInitState,
  password: 'Your Password'
}

const reducer = (state = initState, { type, payload }) => {
  switch(type) {
  case actionType['USERNAME_TEXTFIELD_VALUE_CHANGE']: {
    return Object.assign({}, state, {
      username: {
        value: payload.username
      }
    })
  }
  case actionType['PASSWORD_TEXTFIELD_VALUE_CHANGE']: {
    return Object.assign({}, state, {
      password: {
        value: payload.password
      }
    })
  }
  default:
    return state
  }
}


///*
export default combineReducers({
  username: textfieldReducer('USERNAME'),
  password: textfieldReducer('PASSWORD'),
  //signin: reducer
})
//*/

//export default reducer
