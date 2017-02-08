import * as actionType from 'type/textfield'

export const changeValue = name => evt => {
  return {
    type: name + '_TEXTFIELD_VALUE_CHANGE',
    payload: {
      value: evt.target.value
    }
  }
}

export const setValue = name => value => {
  return {
    type: name + '_TEXTFIELD_VALUE_CHANGE',
    payload: {
      value: value
    }
  }
}

export const clearValue = name => _ => ({
  type: name + '_TEXTFIELD_VALUE_CLEAR',
  payload: {
    value: ''
  }
})
