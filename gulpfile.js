const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function defaultTask(cb) {
    console.log('ola')
    cb();
}

function buildStyles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
};

exports.default = defaultTask
exports.sass = buildStyles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.series(buildStyles))
}

