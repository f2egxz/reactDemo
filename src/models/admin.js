import { Schema } from 'js-data'

export const schema = new Schema({
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    admin_group_id: {
      type: 'string',
      indexed: true
    }
  }
})


export const relation = {
  belongsTo: {
    admingroup: {
      foreignKey: 'admin_group_id',
      localField: 'admingroup'
    }
  }
}
