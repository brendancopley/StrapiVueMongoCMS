'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  PROD = (process.env.NODE_ENV === 'production'),
  path = require('path'),
  postcssImport = require('postcss-import'),
  postcssPresetEnv = require('postcss-preset-env')
;

const rules = [
  {
    test: /\.js$/,
    exclude: file => (
      /node_modules/.test(file) &&
      !/\.vue\.js/.test(file)
    ),
    loader: 'babel-loader',
    options: {
      presets: [
        [
          "@babel/preset-env",
          {
            "useBuiltIns": "usage"
          }
        ],
      ],
      plugins: [
        require('@babel/plugin-syntax-dynamic-import').default,
        require('@babel/plugin-proposal-object-rest-spread').default
      ]
    }
  }, {
    test: /\.vue$/,
    loader: 'vue-loader'
  }, {
    test: /(\.s[ac]ss$)|(\.css$)/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          sourceMap: PROD ? false : true,
        }
      }, {
        loader: 'postcss-loader',
        options: {
          sourceMap: PROD ? false : true,
          ident: 'postcss',
          plugins: () => [
            postcssImport({}),
            postcssPresetEnv({})
          ]
        }
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: PROD ? false : true,
          outputStyle: 'uncompressed'
        }
      }
    ]
  }, {
    test: /\.svg$/,
    exclude: [
      path.resolve(__dirname, 'src/fonts')
    ],
    use: [
      {
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]',
          extract: false
        }
      }
    ]
  }
];

module.exports = rules;
