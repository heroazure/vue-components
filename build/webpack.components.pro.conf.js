process.env.NODE_ENV = 'production'

var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var utils = require('./utils')
var config = require('../config')
var webpackBaseConfig = require('./webpack.base.conf.js')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
  entry: {
    app: './src/components.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader','postcss-loader', 'less-loader'],
          fallback: 'vue-style-loader'
        })
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist/lib'),
    publicPath: '/dist/lib/',
    filename: 'hx.min.js',
    library: 'hx',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin({
      filename: 'hx.min.css',
      allChunks: true
    }),
  ]
});
