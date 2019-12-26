const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.join(__dirname, '../client/index.js')
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: {
            presets: [
                '@babel/preset-env',//引入babel
                '@babel/preset-react' //引入babel-react 
              ]
          }
        }
    ]
  },
  resolve: {
    extensions: ['*','.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].bundle.[hash].js'
  },
  plugins: [
    new CleanWebpackPlugin(),  //清空build文件
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../client/public/index.html'),
      hash: true, // 会在打包好的bundle.js后面加上hash串
      filename: 'index.html'
    })
  ],
  devServer: {
    port: 9000,
    hot:true
  },
  mode: 'production'
}

