const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const compImg = require('gulp-imagemin');

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


function compImage (){
    return gulp.src('./src/images/*')
    .pipe(compImg())
    .pipe(gulp.dest('./build/images'));
}

exports.default = defaultTask
exports.sass = buildStyles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.series(buildStyles))
}
exports.images = compImage

