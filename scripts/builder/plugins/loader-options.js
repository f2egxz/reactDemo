const webpack = require('webpack')
const postcssOption = require('./../postcss')

module.exports = new webpack.LoaderOptionsPlugin({
    debug: true,
    options: {
        postcss: postcssOption
    }
})
