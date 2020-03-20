const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.join(__dirname, '../client/index.js')
  },
  module: {
    rules: [
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192
              }
            }
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: {
            // babel的配置放在这里也可行
            // presets: [
            //     '@babel/preset-env',//引入babel
            //     '@babel/preset-react' //引入babel-react 
            // ]
          }
        },
        {
          // 编译css 为全局样式没有模块化(这样处理了andt的全局样式的冲突)
          test: /\.css$/,
          use: [
              {loader: 'style-loader'},
              {
                  loader:'css-loader',
                  options:{
                    modules:{
                      mode: "global",
                    }
                  }
              },
          ]
        },{
          // 编译less 使用了css modules
          test: /\.less$/,
          use: [
              {loader: 'style-loader'},
              {
                  loader:'css-loader',
                  options:{
                      modules:{
                        mode: "local",
                        localIdentName: '[name]__[local]__[hash:base64:5]',
                      }
                  }
              },
              {loader: 'less-loader'}
          ]
        }
    ]
  },
  resolve: {
    extensions: ['*','.js', '.jsx', '.less', '.css'],
    alias: {
      "@components": path.resolve(__dirname, '../client/components' ),
      "@utils": path.resolve(__dirname, '../client/utils'),
      "@server": path.resolve(__dirname, '../client/server'),
      "@models": path.resolve(__dirname, '../client/models'),
      "@assets": path.resolve(__dirname, '../client/assets')
    }
  },
  output: {
    path: path.join(__dirname, '../build'),
    publicPath: "",
    chunkFilename: "[name].js",
    filename: '[name].bundle.[hash].js'
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../client/public/index.html'),
        hash: true, // 会在打包好的bundle.js后面加上hash串
        filename: 'index.html'
      })
  ],
  optimization: {
    runtimeChunk: {
      name: "mainfest"
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -20,
          chunks: "all"
        }
      }
    }
  },
  // devServer: {
  //   port: 9000,
  //   hot:true
  // },
  // mode: 'production'
  // mode: 'development'
}

