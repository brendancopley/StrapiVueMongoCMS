'use strict';

const webpack = require('webpack'),
  path = require('path'),
  TerserJsPlugin = require('terser-webpack-plugin'),
  OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
  SpriteLoaderPlugin = require('svg-sprite-loader/plugin'),
  { VueLoaderPlugin } = require('vue-loader')
;

module.exports = {
  entry: {
    app: [
      './app.js',
      './app.scss',
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'cmsSrc': path.resolve(__dirname, 'src/')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new SpriteLoaderPlugin(),
    new VueLoaderPlugin()
  ],
  optimization: {
    minimizer: [
      new TerserJsPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          }
        }
      }),
    ]
  }
};
