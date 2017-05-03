'use strict';

var webpack = require('webpack');
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  entry: './app/main.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
 module: {
   rules: [{
     test: /jsx?$/,
     exclude: /(node_modules|bower_components)/,
     use: [{
       loader: 'babel-loader',
       options: {
         'presets': ['react', 'es2015', 'stage-2']
       }
     }]
   }]
  },
  plugins: [
     new StatsPlugin('./stats.json', {
       chunkModules: true,
       exclude: [/node_modules[\\\/]react/]
     })
   ]
 }
