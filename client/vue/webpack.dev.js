'use strict';

process.traceDeprecation = true;

const merge = require('webpack-merge'),
  common = require('./webpack.common.js'),
  path = require('path'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  rules = require('./webpack.rules')
;

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../web/assets/dev/'),
    publicPath: '/assets/dev/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
  },
  module: {
    rules
  },
  devtool: 'cheap-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new CleanWebpackPlugin(['dev'], {
      root: path.resolve(__dirname, '../web/assets/')
    }),
    function() {
      this.hooks.done.tap('done', stats => {
        require('fs').writeFileSync(
          path.join(__dirname, 'src/generated/config-dev.json'),
          "'strapi_cms_version' = '" + stats.toJson().hash + "';"
        );
      });
    }
  ]
});
