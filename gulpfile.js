var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');

gulp.task('sass', function(){
   watch('sass/*.sass', function () {
        return gulp.src('sass/*.sass')
          .pipe(sass())
          .pipe(gulp.dest('css'));
     });


});
