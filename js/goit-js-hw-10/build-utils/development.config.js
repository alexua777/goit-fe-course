const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => ({
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
  ],
  devServer: {

    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    clientLogLevel: 'error',
    stats: 'errors-only',
    historyApiFallback: true,
    noInfo: true,
    quiet: true,
    clientLogLevel: 'warning',
  },
});
