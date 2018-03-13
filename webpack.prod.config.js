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
      use: ['style-loader', { loader: 'css-loader', options: { minimize: true } }, 'less-loader'],
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
      // compress: {
      //   warnings: false
      // }
      // mangle: {
      //   keep_fnames: true
      // }
    }),
    // 减少打包内容
    // https://developers.google.com/web/fundamentals/performance/webpack/decrease-frontend-size
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: './test.html',
    //   inject: true
    // }),
    // hot reload
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2
    }),
    // 再次调用CommonsChunkPlugin用来解决每次chunkhash改变问题
    // https://developers.google.com/web/fundamentals/performance/webpack/use-long-term-caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
      minChunks: Infinity
    }),
    // 根据相对路径生成文件ID
    new webpack.HashedModuleIdsPlugin(),
  ]
};

module.exports = webpackConfig;
