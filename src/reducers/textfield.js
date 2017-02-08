import * as actionType from 'type/textfield'

export const initState = {
  value: ''
}

export default name => (state = initState, { type, payload }) => {
  switch(type) {
  case name + '_TEXTFIELD_VALUE_CHANGE':
    return Object.assign({}, state, {
      value: payload.value
    })
  case name + '_TEXTFIELD_VALUE_CLEAR':
    return Object.assign({}, state, {
      value: ''
    })
  default:
    return state
  }
}
