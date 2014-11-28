var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat')

gulp.task('sass', function() {
	return gulp.src('src/scss/*.scss')
	.pipe(sass())
	.pipe(minifyCSS({'keepSpecialComments': 0}))
	.pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
	gulp.watch('src/scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);