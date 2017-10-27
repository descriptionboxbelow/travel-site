var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

// the gulp variable contains a method named task
// tha task method contains 2 argument
// argument1: task's name
// argument2: task's role

gulp.task('watch', function(){
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });
  watch('./app/index.html', function(){
    browserSync.reload();
  });
  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('cssInject');
  });
  watch('./app/assets/scripts/**/*.js', function () {
    gulp.start('scriptsRefresh');
  });
});

// the "return" is needed due to gulp.src() being an asynchronous function
// between brackets is the dependencies argument: specifies what others
// tasks must run AND complete, in this case, the styles task
gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function () {
  browserSync.reload();
});
