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

gulp.task('10k', function() {
  gulp.src(['components/moment/moment.js', 'components/pikaday/pikaday.js'])
  .pipe(concat('lib.js'))
  .pipe(uglify())
  .pipe(gulp.dest('static/10k/'));

  gulp.src(['src/scss/10k/10k.scss'])
  .pipe(sass())
  .pipe(minifyCSS({'keepSpecialComments': 0}))
  .pipe(gulp.dest('static/10k/'));
});

gulp.task('watch', function() {
  // Sitewide
	gulp.watch('src/scss/*.scss', ['sass']);

  // 10k
  gulp.watch(['components/moment/moment.js',
    'components/pikaday/pikaday.js',
    'src/scss/10k/*.scss'],
  ['10k']);
});

gulp.task('default', ['sass', 'watch', '10k']);