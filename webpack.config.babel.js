import HtmlWebpackPlugin from 'html-webpack-plugin';
import fs from 'fs';
import 'babel-polyfill';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
const path = require('path');
let plugins = [
  new ExtractTextPlugin({
    filename: '[name].css'
  }),
  new HtmlWebpackPlugin({
    filename: `index.html`,
    template: `templates/index.pug`,
  }),

];

export default {
  entry: {
    'main': './scripts/main.js',
  },
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [{
      use: [{
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }],
      include: [
        path.resolve(__dirname, "scripts"),
      ],
      exclude: [path.resolve(__dirname, 'node_modules')]
    }, {
      test: /\.pug$/,
      use: [{
        loader: 'pug-loader'
      }]
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }, {
      test: /\.(svg|woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)*$/,
      use: {
        loader: 'file-loader',
        query: {
          name: '/fonts/[name].[ext]'
        }
      }
    }]
  },
  resolve: {
    modules: ["node_modules"]
  },
  plugins: plugins,
  devServer: {
    contentBase: 'dist'
  }
}

