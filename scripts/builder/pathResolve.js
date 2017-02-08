const { resolve } = require('path')

function pathResolve(...paths) {
  const root = process.cwd()
  return resolve.apply(resolve, [].concat(root).concat(paths))
}

module.exports = pathResolve
