'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./public/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('watch', function () {
  gulp.watch('./public/sass/**/*.sass', gulp.series('sass'));
});

gulp.task('default', gulp.series('watch', 'sass'));