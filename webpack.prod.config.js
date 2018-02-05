const path = require('path');
const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const WebpackDevServer = require('webpack-dev-server');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const DashboardPlugin = require('webpack-dashboard/plugin');

const webpackConfig = {
  entry: {
    app: './components/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
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
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader: 'file-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    classnames: 'classnames',
    'prop-types': 'prop-types'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
      // mangle: {
      //   keep_fnames: true
      // }
    })
    // new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: './test.html',
    //   inject: true
    // }),
    // hot reload
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()

    // dashboard
    // new DashboardPlugin({ port: port })
  ]
};

module.exports = webpackConfig;
