var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('compass-importer');
var swig = require('gulp-swig');
var data = require('gulp-data');
var path = require('path');

var getJsonData = function(file) {
   return require('./data/' + path.basename(file.path).slice(0, -5) + '.json'); 
}

gulp.task('default', ['sass','templates'],function() {
    console.log("Completed!");
});

gulp.task('sass',function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass({
            includePaths: require('node-reset-scss').includePath,
            importer: compass
        }).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('templates', function() {
  gulp.src('./templates/*.html')
    .pipe(data(getJsonData))
    .pipe(swig())
    .pipe(gulp.dest('.'));
});

gulp.task('sass:watch', function () {
      gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('templates:watch', function () {
      gulp.watch(['./templates/*.html','./data/*.json'], ['templates']);
});
