const gulp       = require('gulp');
const browserify = require('browserify');
const sourcemaps = require('gulp-sourcemaps');
const babelify   = require('babelify');
const source     = require('vinyl-source-stream');
const buffer     = require('vinyl-buffer');
const config     = require('../config');
const notify     = require("gulp-notify");

gulp.task('browserify', function() {
    return browserify(`./${config.paths.js}main/base.js`)
    .transform(babelify, { presets: ['env', 'stage-1'], sourceMaps: false })
    .bundle()
    .on('error', notify.onError(function (error) {
        return "Js: " + error.message;
    }))
    .pipe(source('main.js'))
    .pipe(gulp.dest(`${config.paths.dist}${config.paths.assets}${config.paths.js}`));
});
