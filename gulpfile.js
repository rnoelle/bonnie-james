const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');

gulp.task('js', () => {
  gulp.src(['./app/components/*.js', './app/**/*.js'])
  .pipe(plumber())
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('./bundle.js'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('css', () => {
  gulp.src(['./styles/reset.css', './styles/main.scss', './styles/**/*.scss'])
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['css', 'js']);
gulp.watch('./app/**/*.js', ['js']);
gulp.watch('./styles/**/*.scss', ['css']);
