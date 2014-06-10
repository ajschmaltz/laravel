var gulp = require('gulp');
var minify = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin')

var custom = ['css', 'js', 'html'];
var projects = ['css-bootstrap'];

gulp.task('css', function() {
  return gulp.src('source/css/*.css')
 .pipe(prefix("last 5 version"))
 .pipe(minify())
 .pipe(concat('all.css'))
 .pipe(gulp.dest('public/css'));
});

gulp.task('html', function(){
  return gulp.src('source/views/*.blade.php')
  .pipe(htmlmin({collapseWhitespace: true,removeComments: true,removeAttributeQuotes: true}))
  .pipe(gulp.dest('app/views'));
});

gulp.task('js', function(){
  return gulp.src('source/js/*.js')
  .pipe(uglify())
  .pipe(concat('all.js'))
  .pipe(gulp.dest('public/js'));
});

gulp.task('css-bootstrap', function(){
  return gulp.src('bowser_components/bootstrap/dist/css/bootstrap.css')
  .pipe(gulp.dest('public/css'));
});

gulp.task('default', function() {
  gulp.watch('source/**', custom);
  gulp.watch('bowser_components/**', projects);
});
