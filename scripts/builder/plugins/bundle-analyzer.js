const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')

module.exports = new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    analyzerPort: '9001',
    reportFilename: path.join(process.cwd(), 'dist', 'report.html'),
    openAnalyzer: false,
    generateStatsFile: false,
    statsFilename: 'stats.json',
    statsOptions: null,
    logLevel: 'info'
})
