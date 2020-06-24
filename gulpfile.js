const gulp = require('gulp'),
      imagemin = require('gulp-imagemin');

function defaultTask(done) {
  done();
}

gulp.task('static', ()=>{
  return gulp.src('img/assets/*')
  .pipe(imagemin())
  .pipe(gulp.dest('src/assets/static'));
});

gulp.task('upload', ()=>{
  return gulp.src('img/uploads/*')
  .pipe(imagemin())
  .pipe(gulp.dest('src/assets/uploads'));
});

gulp.task('favicon', ()=>{
  return gulp.src('img/favicon/*')
  .pipe(imagemin())
  .pipe(gulp.dest('public/favicon'));
});

gulp.task('default', gulp.series('static','upload','favicon'), defaultTask);
