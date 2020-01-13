const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = WebpackMerge(webpackConfig, {
  mode: 'production',
  plugins:[
    new CleanWebpackPlugin(),  //清空build文件
    new CopyPlugin([
      {
        from: path.join(__dirname, '../client/static'),
        to: 'static'
      }
    ]),
    new BundleAnalyzerPlugin({
      analyzerHost: '127.0.0.1',
      analyzerPort: 8889
    })
  ]
})