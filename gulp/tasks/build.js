var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin');

gulp.task("deleteDocsFolder", function(){
	return del("./docs");
})

gulp.task('optimizeImages', ['deleteDocsFolder'], function(){
	return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
	.pipe(imagemin({
		progressive: true,
		interlaced: true,
		multipass: true
	}))
	.pipe(gulp.dest("./docs/assets/images"));
})

gulp.task('usemin', ['deleteDocsFolder'], function(){
	return gulp.src("./app/index.html")
	.pipe(usemin())
	.pipe(gulp.dest("./docs"));
})


gulp.task('build', ['deleteDocsFolder', 'optimizeImages', 'usemin']);
