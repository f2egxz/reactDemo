/**
 * stylelint.js
 *
 * CSS样式代码质量检查插件
 *
 * @link [stylelint](https://github.com/stylelint/stylelint)
 * @link [stylelint-webpack-plugin](https://github.com/vieron/stylelint-webpack-plugin/)
 * @author yf <631190613@qq.com>
 */

const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = new StyleLintPlugin({
    files: 'styles/**/*.css'
})
