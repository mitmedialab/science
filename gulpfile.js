var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("build", shell.task(["bundle exec jekyll serve"]));

gulp.task("default", gulp.series("build"));