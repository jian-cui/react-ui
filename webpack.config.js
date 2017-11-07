const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  entry: "./test.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
      exclude: /node_modules/
    }, {
      test: /\.jsx$|\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['es2015', 'react']
      },
      exclude: /node_modules/
    }]
  },
  devtool: 'source-map',
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './test.html',
      inject: true
    })
  ]
}

const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
  contentBase: 'dist/'
});

server.listen(3000, function () {
  console.log('listening localhost:3000');
});