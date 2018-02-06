const path = require('path');
const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 3001;

const webpackConfig = {
  entry: {
    app: './example/index.jsx'
  },
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
        presets: ['es2015', 'stage-0', 'react']
      },
      exclude: /node_modules/
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader: 'file-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  // devServer: {
  //   contentBase: './dist',
  //   hot: true
  // },
  // watch: true,
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './example/index.html',
      inject: true
    }),
    // hot reload
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()

    // dashboard
    // new DashboardPlugin({ port: port })
  ]
};

const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
};

WebpackDevServer.addDevServerEntrypoints(webpackConfig, options); // hot reload setting
const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, options);

// server.listen(port, 'localhost', function () {
//   console.log('listening localhost:' + port);
// });

server.listen(port, 'localhost', () => {
  console.log(`listening localhost: ${port}`);
});
