const gulp = require('gulp'),
      imagemin = require('gulp-imagemin');

function defaultTask(done) {
  done();
}

function imagemins() {
  gulp.src('img/assets/*')
      .pipe(imagemin())
      .pipe(gulp.dest('src/assets/static'));
}

gulp.task('image', imagemins);
gulp.task('default', gulp.series('image'), defaultTask);
