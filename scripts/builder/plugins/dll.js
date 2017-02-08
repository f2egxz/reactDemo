const webpack = require('webpack')
const resolve = require('./../pathResolve')

module.exports = new webpack.DllReferencePlugin({
  context:  '.',
  manifest: resolve('dist/vendor-manifest.json')
})
