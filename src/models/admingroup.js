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
    description: {
      type: 'string'
    }
  }
})


export const relation = {
  hasMany: {
    admin: {
      foreignKey: 'admin_group_id',
      localField: 'admins'
    }
  }
}
