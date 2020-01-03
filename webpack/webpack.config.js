const path = require('path');
const webpack = require('webpack');
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
        },{
          test: /\.(less|css)$/,
          use: [
            require.resolve('style-loader'),
            {
              loader: require.resolve('css-loader'),
              options: {
                modules: {
                  mode: 'local',
                  localIdentName: '[path][name]__[local]--[hash:base64:5]',
                  hashPrefix: 'my-custom-hash'
                }
              }
            },
            require.resolve('less-loader')
          ]
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
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../client/public/index.html'),
      hash: true, // 会在打包好的bundle.js后面加上hash串
      filename: 'index.html'
    })
  ],
  // devServer: {
  //   port: 9000,
  //   hot:true
  // },
  // mode: 'production'
  // mode: 'development'
}

