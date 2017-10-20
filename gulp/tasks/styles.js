var gulp = require('gulp'),
//postcss expects ARRAYS !
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

// the "return" is needed due to gulp.src() being an asynchronous function
gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
  //postcss expect an ARRAY of postcss filters !
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
