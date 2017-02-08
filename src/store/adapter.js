//-*- mode: js2 -*-
//-*- coding: utf-8 -*-

/**
 * adapter.js
 *
 * 适配器，用于同步js-data-store与redux-store
 *
 * @author fe.yf <631190613@qq.com>
 */

import * as action from 'action/data'
import store from 'store'

const Adapter = process.env.NODE_ENV === 'production' ?
      require('js-data-http').HttpAdapter :
      require('js-data-localstorage').LocalStorageAdapter

class ReduxAdapter extends Adapter {
  afterFindAll(mapper, query, opts = {}, records) {
    const { dispatch } = store
    const { endpoint } = mapper
    dispatch(action.sync(endpoint)(records))
  }

  afterCreate(mapper, query, opts = {}, record) {
    const { dispatch, getState } = store
    const { endpoint } = mapper

    if(!getState()[endpoint]) {
      this.findAll(mapper)
        .then(() => dispatch(action.create(endpoint)(record)))
    } else {
      dispatch(action.create(endpoint)(record))
    }
  }

  afterDestroy(mapper, id, opts = {}) {
    const { dispatch } = store
    const { endpoint } = mapper

    dispatch(action.destroy(endpoint)(id))
  }

  afterUpdate(mapper, id, record, opts = {}) {
    const { dispatch } = store
    const { endpoint } = mapper

    dispatch(action.update(endpoint)(id, record))
  }
}


export default ReduxAdapter
