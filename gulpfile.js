/**
 * import Gulp and Gulp-plugins
 */
var gulp = require('gulp');
//var cleanCSS = require('gulp-clean-css');



/**
 * define functions
 */
// simple console output
function console_out(done) {
  console.log("Hooray, I created a Gulp task, just start watching!");
  done();
};

// process html files
function process_html(done) {
  console.log("Imagine something useful being done to your HTML here...");
  done();
};

// process css files
//function process_css(done) {
//  return gulp.src('styles/**/*.css')
//    .pipe(cleanCSS())
//    .pipe(gulp.dest('dist/'));

//  done();
//};
function process_css(done) {
  console.log("Imagine Sass or PostCSS Files running here...");
  done();
};

// watch html and css
function watch(done) {
  gulp.watch('./app/**/*.html', process_html);
  gulp.watch('./app/assets/styles/**/*.css', process_css);
};



/**
 * define Gulp tasks:
 * gulp.task('process_name', execute_process_function);
 */
gulp.task('console_out', console_out);
gulp.task('process_html', process_html);
gulp.task('process_css', process_css);
gulp.task('watch', watch);

//default Gulp task
gulp.task('default', gulp.series(console_out, watch));
