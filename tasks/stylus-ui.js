const gulp         = require('gulp');
const stylus       = require('gulp-stylus');
const sourcemaps   = require('gulp-sourcemaps');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const notify       = require("gulp-notify");
const config       = require('../config');

gulp.task('stylus-ui', function () {
    return gulp.src(`./${config.paths.css}modules/ui.styl`)
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .on('error', notify.onError(function (error) {
            return "Stylus: " + error.message;
        }))
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 version'] }) ])) //configure
        .pipe(sourcemaps.write(config.paths.maps))
        .pipe(gulp.dest(`${config.paths.dist}${config.paths.assets}${config.paths.css}modules/`));
});
