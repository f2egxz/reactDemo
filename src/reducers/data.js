import actionType from 'type/data'

export const initState = {}

const sync = (state, payload) => {
  const { endpoint } = payload

  return Object.assign({}, state, {
    [endpoint]: payload[endpoint]
  })
}

const findIndexByIdAttribute = (payload, endpoint) => x => {
  const { endpoint, idAttribute = 'id' } = payload
  const id = idAttribute
  return payload[endpoint][id] === x[id]
}

const findAll = (state, payload) => {
  return state
}

const find = (state, payload) => {
  return state
}

const create = (state, payload) => {
  const { endpoint } = payload

  return Object.assign({}, state, {
    [endpoint]: [
        ...state[endpoint],
      payload[endpoint]
    ]
  })
}

const createMany = (state, payload) => {
  const { endpoint } = payload

  return Object.assign({}, state, {
    [endpoint]: [
        ...state[endpoint],
        ...payload[endpoint]
    ]
  })
}

const destroy = (state, payload) => {
  const { endpoint } = payload
  const idx = state[endpoint].findIndex(
    findIndexByIdAttribute(payload)
  )

  return Object.assign({}, state, {
    [endpoint]: [
        ...state[endpoint].slice(0, idx),
        ...state[endpoint].slice(idx + 1),
    ]
  })
}

const destroyAll = (state, payload) => {
  const { endpoint } = payload

  return Object.assign({}, state, {
    [endpoint]: []
  })
}

const update = (state, payload) => {
  const { endpoint } = payload
  const idx = state[endpoint].findIndex(
    findIndexByIdAttribute(payload)
  )

  return Object.assign({}, state, {
    [endpoint]: [
        ...state[endpoint].slice(0, idx),
      payload[endpoint],
        ...state[endpoint].slice(idx + 1),
    ]
  })
}

export default (state = initState, { type, payload }) => {
  if(!/^@@data/.test(type)) return state

  const { endpoint, id } = payload

  switch(type) {
  case actionType(endpoint).sync:
    return sync(state, payload)
  case actionType(endpoint).findAll:
    return findAll(state, payload)
  case actionType(endpoint).create:
    return create(state, payload)
  case actionType(endpoint, id).update:
    return update(state, payload)
  case actionType(endpoint, id).destroy:
    return destroy(state, payload)
  default:
    return state
  }
}
