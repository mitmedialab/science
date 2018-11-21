'use strict';

var gulp = require('gulp');
var serve = require('gulp-serve');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');

gulp.task('serve', ['sass'], function() {
  browserSync.init({server: "./"});
  gulp.watch("scss/*.scss", ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src("scss/style.scss").pipe(sass()).pipe(gulp.dest("css")).pipe(browserSync.stream());
});

gulp.task('concat', function () {
  return gulp.src('css/*.css')
    .pipe(concatCss("css/style.css"))
    .pipe(gulp.dest('out/'));
});

gulp.task('default', ['serve']);
