var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite');

// The svgSprite package require its options to be defined in an object LITERAL, hence the variable using curly brackets. We must then tell svgSprite which MODE it should use

var config = {
  mode: {
    css: {
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}

gulp.task('createSprite', function(){
  // writing /**/*.svg accounts for any potential future subfolders of ICONS
  // and subfiles with the .svg extension
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});
