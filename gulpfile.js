var gulp = require('gulp');
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');


gulp.task('css', function() {
  return gulp.src('/public/source/css/*.css')
 .pipe(prefix("last 5 version"))
 .pipe(minify())
 .pipe(concat('all.css'))
 .pipe(gulp.dest('/public/css'));
});

gulp.task('watch', function() {
  gulp.watch('/public/source/css/*.css', ['css']);
});
