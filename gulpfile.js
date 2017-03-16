
var gulp         = require('gulp');
    watcher      = require('gulp-watch');
    concat       = require('gulp-concat');


gulp.task('css', function () {
  return gulp.src('src/assets/*.css')
  .pipe(gulp.dest('src/css'));
});


gulp.task('watch', function() {
  gulp.watch("src/styles/*.css", ['css']);
});
