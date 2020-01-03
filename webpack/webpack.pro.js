const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
module.exports = WebpackMerge(webpackConfig, {
  mode: 'production',
  plugins:[
    new CleanWebpackPlugin(),  //清空build文件
  ]
})