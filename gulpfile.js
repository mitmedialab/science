'use strict';

var gulp = require('gulp');
var serve = require('gulp-serve');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');

gulp.task('serve', ['sass'], function() {
  browserSync.init({server: "./public"});
  gulp.watch("public/scss/*.scss", ['sass']);
  gulp.watch("public/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src("public/scss/style.scss").pipe(sass()).pipe(gulp.dest("public/css")).pipe(browserSync.stream());
});

gulp.task('concat', function () {
  return gulp.src('public/css/*.css')
    .pipe(concatCss("public/css/style.css"))
    .pipe(gulp.dest('out/'));
});

gulp.task('default', ['serve']);
