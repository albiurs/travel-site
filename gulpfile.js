/**
 * import Gulp and Gulp-plugins
 */
var gulp = require('gulp');
var postcss = require('gulp-postcss'); // auto-postprocessing of css code
var autoprefixer = require('autoprefixer'); // prefix css to vendor/browser specific css prefixes
var cssvars = require('postcss-simple-vars'); // support variables ins css files and convert to standard css code
var nested = require('postcss-nested'); // support nested commands in css files and convert to standard css code
var cleanCSS = require('gulp-clean-css'); // clean and minify css files



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
function process_css(done) {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssvars, nested, autoprefixer]))
		.pipe(cleanCSS())
		.pipe(gulp.dest('./app/tmp/styles'));
	done();
};

// watch html and css
function watch(done) {
	gulp.watch('./app/**/*.html', process_html);
	gulp.watch('./app/assets/styles/**/*.css', process_css);
	done();
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
