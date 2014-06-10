var gulp = require('gulp');
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');
var smhtml = require('gulp-htmlmin')


gulp.task('css', function() {
  return gulp.src('source/css/**')
 .pipe(prefix("last 5 version"))
 .pipe(minify())
 .pipe(concat('all.css'))
 .pipe(gulp.dest('public/css'));
});

gulp.task('html', function(){
  return gulp.src('source/views/**')
  .pipe(gulp.dest('app/views'));
});

gulp.task('js', function(){
  return gulp.src('source/js/**')
  .pipe(gulp.dest('public/js'));
});

gulp.task('default', function() {
  gulp.run('css');
  gulp.run('html');
  gulp.run('js');
  
  gulp.watch('source/**', function(){
    gulp.run('css');
    gulp.run('html');
    gulp.run('js');
  });
});
