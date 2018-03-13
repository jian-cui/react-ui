// const path = require('path');
// const fs = require('fs');
const gulp = require('gulp');
// const webpack = require('gulp-webpack');
const babel = require('gulp-babel');
// const config = require('./webpack.prod.config.js');


// function process(filename) {
//   const fileArr = filename.split('/');
//   gulp.src(filename)
//     .pipe(babel({
//       presets: ['es2015', 'stage-0', 'react']
//     }))
//     .pipe(gulp.dest(`./dist/${filename}`));
// }

gulp.task('default', () => {
  // const dirs = fs.readdirSync('./components');
  // dirs.forEach((file) => {
  //   const filePath = `./components/${file}`;
  //   fs.stat(filePath, (err, stat) => {
  //     if (stat.isDirectory()) {
  //       // 获取下一个目录
  //       process(`${filePath}/index.jsx`);
  //     } else {
  //       // 用webpack处理
  //       process(`${filePath}`);
  //     }
  //   });
  // });
  gulp.src('./components/*.js')
    .pipe(babel({
      presets: ['es2015', 'stage-0', 'react']
    }))
    .pipe(gulp.dest('./dist/'));
  gulp.src('./components/**/*.jsx')
    .pipe(babel({
      presets: ['es2015', 'stage-0', 'react']
    }))
    .pipe(gulp.dest('./dist/'));
});
