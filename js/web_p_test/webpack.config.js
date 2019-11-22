const path = require('path');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const modeConfig = (env) => require(`./build-utils/${env.mode}.config`)(env);

module.exports = (env) => webpackMerge({
  context: path.resolve(__dirname, 'src'),
  mode: env.mode,
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },

      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[path]/[name].[ext]',
            },
          },
        ],
      },
      { test: /\.hbs$/, use: 'handlebars-loader' },

      {
        test: /\.html$/,
        use: ['html-loader'],
      },

    ],
  },
  plugins: [new CleanWebpackPlugin(), new FriendlyErrorsWebpackPlugin(), new WebpackBar()],
}, modeConfig(env));



