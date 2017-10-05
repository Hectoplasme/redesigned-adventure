const gulp        = require('gulp');
const browserSync = require('browser-sync');
const config      = require('../config');

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch(`./${config.paths.js}main/**/**/*.js`, ['browserify', browserSync.reload]);
    gulp.watch(`./${config.paths.js}vendors/**/**/*.js`, ['vendors', browserSync.reload]);
    gulp.watch(`./${config.paths.js}modules/**/**/*.js`, ['browserify-modules', browserSync.reload]);
    gulp.watch(`./${config.paths.css}**/**/**/*.styl`, ['stylus', browserSync.reload]);
    gulp.watch(`./${config.paths.css}modules/ui.styl`, ['stylus-ui', browserSync.reload]);
    gulp.watch(`./${config.paths.templates}**/*.pug`,['templates', browserSync.reload]);
});
