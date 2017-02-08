import { DataStore } from 'js-data'
import ReduxAdapter from 'store/adapter'
import store from 'store'
import * as adminGroupModel from 'model/admingroup'
import * as adminModel      from 'model/admin'

const api = new DataStore()
const flag = 'ls'
const adapter = new ReduxAdapter()

api.registerAdapter(flag, adapter, { default: true })
api.defineMapper('admingroup', {
  endpoint: 'admingroups',
  schema: adminGroupModel.schema,
  relations: adminGroupModel.relation
})
api.defineMapper('admin', {
  endpoint: 'admins',
  schema: adminModel.schema,
  relations: adminModel.relation
})

export default api
