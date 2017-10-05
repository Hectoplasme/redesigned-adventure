const gulp       = require('gulp');
const uglify     = require('gulp-uglify');
const stripDebug = require('gulp-strip-debug');
const config     = require('../config');

gulp.task('uglify', ['browserify', 'vendors'], function() {
    return gulp.src([
        `${config.paths.dist}${config.paths.assets}${config.paths.js}main.js`
    ])
    .pipe(uglify())
    .pipe(stripDebug())
    .pipe(gulp.dest(`${config.paths.dist}${config.paths.assets}${config.paths.js}`));
});
