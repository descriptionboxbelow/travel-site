var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

// The svgSprite package require its options to be defined in an object LITERAL, hence the variable using curly brackets. We must then tell svgSprite which MODE it should use

var config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}

// To delete a folder with this task we leverage the "del" npm package
gulp.task('beginClean', function() {
  return del(['./app/temp/sprite/', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function(){
  // writing /**/*.svg accounts for any potential future subfolders of ICONS
  // and subfiles with the .svg extension
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteGraphic', ['createSprite'], function(){
  return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

// To have Gulp rename the file, we leverage the gulp-rename package
// the second argument between brackets is a dependency. This task won't run before its dependecies have run
gulp.task('copySpriteCSS', ['createSprite'], function(){
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function () {
  return del('./app/temp/sprite');
});

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);
