const gulp   = require('gulp');
const uglify = require('gulp-uglify');
const config = require('../config');

gulp.task('deploy', ['clean', 'uglify', 'uglify-modules', 'cssmin', 'imagemin', 'fonts', 'templates']);
