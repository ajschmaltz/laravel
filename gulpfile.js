var gulp = require('gulp');
var minify = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');
var gulpBowerFiles = require('gulp-bower-files');
var filter = require('gulp-filter');

var customCss = ['css'];
var customJs = ['js'];
var customHtml = ['html'];
var bootstrapCss = ['bootstrap-css'];


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

gulp.task("bower-files", function(){
    gulpBowerFiles().pipe(gulp.dest('public'));
});

gulp.task('default', function() {
  gulp.watch('source/js/*.js', customJs);
  gulp.watch('source/css/*.css', customCss);
  gulp.watch('source/views/*.blade.php', customHtml);
  gulp.watch('bower_components/bootstrap/dist/css/bootstrap.css', projects);
});
