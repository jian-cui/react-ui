const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
// const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
// const named = require('vinyl-named');
const babel = require('gulp-babel');
// const config = require('./webpack.prod.config.js');

const webpackConfig = {
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name]'
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
  }
};
// function process(filename) {
//   const fileArr = filename.split('/');
//   gulp.src(filename)
//     .pipe(babel({
//       presets: ['es2015', 'stage-0', 'react']
//     }))
//     .pipe(gulp.dest(`./dist/${filename}`));
// }

gulp.task('default', () => {
  gulp.src('./components/*.js')
    .pipe(babel({
      presets: ['es2015', 'stage-0', 'react']
    }))
    .pipe(gulp.dest('./dist/'));

  const dirs = fs.readdirSync('./components');
  const entry = {};
  dirs.forEach((file) => {
    const filePath = `./components/${file}`;
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      entry[`${file}/index.js`] = `${filePath}/index.jsx`;
    }
  });
  webpack(Object.assign(webpackConfig, { entry }), () => {
    console.log('Finished');
  });
});
