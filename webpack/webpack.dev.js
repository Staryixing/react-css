const Webpack = require('webpack');
const WebpackConfig = require('./webpack.config.js');
const WebpackMerge = require('webpack-merge');
module.exports = WebpackMerge(WebpackConfig,{
  // mode: 'development',
  devServer: {
    port: 9000,
    host: '0.0.0.0', // 设置局域网可以访问
    hot:true
  },
  plugins: [
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ]
})