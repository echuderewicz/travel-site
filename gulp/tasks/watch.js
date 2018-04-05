const gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){

  browserSync.init({
    //this removed the annoying/distracting black button
    notify: false,
    server: {
      baseDir: "app"
    }
  })

  watch('./app/index.html', function(){
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('cssInject');
  })

});

//inject css into during
//note the 2nd argument which indicates the dependencies
//that need to run before cssInject

gulp.task('cssInject', ['styles'], function(){
  //the temp styles has be generated prior to piping into browser-sync
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());
})
