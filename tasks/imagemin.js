const gulp     = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const config  = require('../config');

gulp.task('imagemin', function () {
    return gulp.src(`./${config.paths.images}/**/**/**/*`)
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [pngquant()]
    }))
    .pipe(gulp.dest(`${config.paths.dist}${config.paths.assets}${config.paths.images}`));
});
