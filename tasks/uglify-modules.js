const gulp       = require('gulp');
const uglify     = require('gulp-uglify');
const stripDebug = require('gulp-strip-debug');
const buffer     = require('vinyl-buffer');
const config     = require('../config');

gulp.task('uglify-modules', ['browserify-modules'], function() {
    gulp.src(`${config.paths.dist}${config.paths.assets}${config.paths.js}modules/**/**/*.js`)
    .pipe(uglify())
    .pipe(stripDebug())
    .pipe(gulp.dest(`${config.paths.dist}${config.paths.assets}${config.paths.js}modules`));
});
