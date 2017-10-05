const gulp       = require('gulp');
const browserify = require('browserify');
const sourcemaps = require('gulp-sourcemaps');
const babelify   = require('babelify');
const source     = require('vinyl-source-stream');
const buffer     = require('vinyl-buffer');
const config     = require('../config');
const notify     = require("gulp-notify");
const tap        = require("gulp-tap");

gulp.task('browserify-modules', function() {
    return gulp.src(`./${config.paths.js}modules/**/main.js`, { read: false })
    .pipe(tap((file) => {
        file.contents = browserify(file.path).transform(babelify, { presets: ['env', 'stage-1'], sourceMaps: false }).bundle()
    }))
    .on('error', notify.onError(function (error) {
        return "Js Modules: " + error.message;
    }))
    .pipe(buffer())
    .pipe(gulp.dest(`${config.paths.dist}${config.paths.assets}${config.paths.js}modules/`));
});
