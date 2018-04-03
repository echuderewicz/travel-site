const gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
  console.log('Hooray');
});

gulp.task('html', function(){
  console.log('imagine something useful being done here');
});

gulp.task('styles', function(){
  console.log('imagine sass or post css running here');
});

gulp.task('watch', function(){
  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  })

});
