import { compose } from 'redux'
import api, { store } from 'store/datastore'

const reverseStr = str => {
  return str.match(/^@@api\/(\w+) (\w+)(?:\/?([\w|-]+))?/)
}

export default ({ dispatch }) => next => action => {
  const { type } = action

  if(!type) return next(action)

  if(!/^@@api/.test(type)) return next(action)

  const [_, method, endpoint, id] = reverseStr(type)

  if(process.env.NODE_ENV === 'development') {
    console.log(
      `\
%c${method} %c/${endpoint}s${id ? '/' + id : ''}`,
      'color:#8BC34A;font-size:14px;font-weight:bolder;',
      'color:#fff;font-size:14px;'
    )
  }

  const { payload } = action

  dispatch({
    type: `REQUEST_${method}_${endpoint}`
  })

  const requestAction = (method, endpoint) => ({
    type: `REQUEST_${method}_${endpoint}`
  })

  const requestSuccessAction = (method, endpoint) => ({
    type: `SUCCESS_${method}_${endpoint}`
  })

  const requestFailureAction = (method, endpoint, err) => {

    if(process.env.NODE_ENV === 'development') {
      throw new Error(err)
    }

    return {
      type: `FAILURE_${method}_${endpoint}`,
      error: true,
      payload: err
    }
  }

  const matcher = () => {
    switch(method) {
    case 'GET': {
      if(!id) {
        return api.findAll(endpoint)
      }
      return Promise.resolve()
    }
    case 'POST': {
      console.log(endpoint, payload)
      return api.create(endpoint, payload)
    }
    case 'DELETE': {
      return api.destroy(endpoint, id)
    }
    case 'PUT':
    case 'PATCH': {
      return api.update(endpoint, id, payload)
    }
    default:
      return Promise.resolve()
    }
  }

  return Promise.resolve(() => dispatch(requestAction(method, endpoint)))
    .then(matcher)
    .then(() => dispatch(requestSuccessAction(method, endpoint)))
    .catch(err => dispatch(requestFailureAction(method, endpoint, err)))
}
