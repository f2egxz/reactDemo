export default (endpoint, id) => ({
  sync:       `@@data/SYNC_${endpoint}`,
  create:     `@@data/CREATE_${endpoint}`,
  createMany: `@@data/CREATEMANY_${endpoint}`,
  update:     `@@data/UPDATE_${endpoint}_${id}`,
  updateAll:  `@@data/UPDATEALL_${endpoint}`,
  updateMany: `@@data/UPDATEMANY_${endpoint}`,
  destroy:    `@@data/DESTROY_${endpoint}_${id}`,
  destroyAll: `@@data/DESTROYALL_${endpoint}`,
  find:       `@@data/FIND_${endpoint}_${id}`,
  findAll:    `@@data/FINDALL_${endpoint}`,
  load:       `@@data/LOAD_${endpoint}`,
})
