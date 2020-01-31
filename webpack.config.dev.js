const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')

module.exports = merge(baseConfig, {
  mode: 'development',
  watch: true,
  output: {
    publicPath: '/',
  },
  devServer: {
    port: 9877,
    open: true,
    historyApiFallback: true,
  },
  devtool: 'source-map',
})
