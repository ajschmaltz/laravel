var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


gulp.task('css', function() {
  return gulp.src('/public/source/css/*.css')
 .pipe(uglify())
 .pipe(concat('all.css'))
 .pipe(gulp.dest('/public/css'));
});

gulp.task('watch', function() {
  gulp.watch('/public/source/css/*.css', ['css']);
});
