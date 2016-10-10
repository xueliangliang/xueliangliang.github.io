var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass',function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass({
            includePaths: require('node-reset-scss').includePath
        }).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
      gulp.watch('./scss/**/*.scss', ['style']);
});
