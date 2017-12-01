// import the main 'gulp' package
var gulp = require('gulp'),
// import the modernizr package
modernizr = require('gulp-modernizr');

// create a new gulp task and name it 'modernizr'
gulp.task('modernizr', function () {
/*
The general gulp skeleton we always use:
1. return gulp.src('')
2. pipe things thru the modernizr package
3. pipe that resulting file to a destination-> gulp.dest()
*/
  return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
    .pipe(modernizr({
      "options": [
        "setClasses"
      ]
    }))
    .pipe(gulp.dest('./app/temp/scripts/'));
});
/*
To tell modernizr which features to test for:
1. within gulp.src(''), point towards our project's css and Js files
2. pipe that group of files thru the modernizr package. It will look at code and automatically determine which features
we need to test for
3. pipe that resulting file to a destination-> gulp.dest()
*/
