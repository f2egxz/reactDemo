import actionType from 'type/data'

export const findAll = endpoint => records => dispatch => {
  dispatch({
    type: actionType(endpoint).findAll,
    payload: {
      endpoint: endpoint
    }
  })
}


export const create = endpoint => props => dispatch => {
  dispatch({
    type: actionType(endpoint).create,
    payload: {
      endpoint: endpoint,
      [endpoint]: props
    }
  })
}

export const sync = endpoint => props => dispatch => {
  dispatch({
    type: actionType(endpoint).sync,
    payload: {
      endpoint: endpoint,
      [endpoint]: props
    }
  })
}

export const createMany = endpoint => props => dispatch => {
  dispatch({
    type: actionType(endpoint).createMany,
    payload: {
      endpoint: endpoint,
      [endpoint]: props
    }
  })
}


export const destroy = endpoint => id => dispatch => {
  dispatch({
    type: actionType(endpoint, id).destroy,
    payload: {
      endpoint: endpoint,
      id: id,
      [endpoint]: {
        id: id
      }
    }
  })
}

export const destroyAll = endpoint => dispatch => {
  dispatch({
    type: actionType(endpoint).destroyAll,
    payload: {
      endpoint: endpoint
    }
  })
}

export const update = endpoint => (id, props) => dispatch => {
  dispatch({
    type: actionType(endpoint, id).update,
    payload: {
      endpoint: endpoint,
      [endpoint]: props,
      id: props.id,
    }
  })
}
