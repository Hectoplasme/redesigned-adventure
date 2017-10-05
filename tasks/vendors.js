const gulp       = require('gulp');
const source     = require('vinyl-source-stream');
const buffer     = require('vinyl-buffer');
const config     = require('../config');
const notify     = require("gulp-notify");
const concat     = require("gulp-concat");
const minify     = require("gulp-minify");
const rename     = require("gulp-rename");

gulp.task('vendors', function() {
    return gulp.src(`./${config.paths.js}vendors/*.js`)
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest(`${config.paths.dist}${config.paths.assets}${config.paths.js}`))
});
