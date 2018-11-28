var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Task for building blog when something changed:
gulp.task('build', shell.task(['bundle exec jekyll serve']));
// If you don't use bundle:
// gulp.task('build', shell.task(['jekyll serve']));
// If you use  Windows Subsystem for Linux (thanks @SamuliAlajarvela):
// gulp.task('build', shell.task(['bundle exec jekyll serve --force_polling']));

// Task for serving blog with Browsersync
gulp.task('serve', function () {
    browserSync.init({ server: { baseDir: '_site/' } });
    gulp.watch("_site/scss/*.scss", gulp.series('sass'));
    // Reloads page when some of the already built files changed:
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src("_site/scss/style.scss").pipe(sass()).pipe(gulp.dest("_site/css/")).pipe(browserSync.stream());
});

gulp.task('default', gulp.series('serve'));