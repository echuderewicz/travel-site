const gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();

gulp.task('default', function(){
  console.log('Hooray');
});

gulp.task('html', function(){
  console.log('imagine something useful being done here');
});

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));

});

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
