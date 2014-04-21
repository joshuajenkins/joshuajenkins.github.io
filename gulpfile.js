var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');

gulp.task('sass', function() {
	return gulp.src('src/scss/*.scss')
	.pipe(sass())
	.pipe(minifyCSS(
		{'keepSpecialComments': 0}
	))
	.pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
	gulp.watch('src/scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);