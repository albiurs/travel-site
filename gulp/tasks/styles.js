/**
 * import Gulp and Gulp plugins
 */
var gulp = require('gulp');
var postcss = require('gulp-postcss'); // auto-postprocessing of css code
var autoprefixer = require('autoprefixer'); // prefix css to vendor/browser specific css prefixes
var cssvars = require('postcss-simple-vars'); // support variables ins css files and convert to standard css code
var nested = require('postcss-nested'); // support nested commands in css files and convert to standard css code
var cleanCSS = require('gulp-clean-css'); // clean and minify css files
var cssImport = require('postcss-import'); // import multiple css files into one



/**
 * define functions
 */
// process css files
function process_css(done) {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
		//.pipe(cleanCSS())
		.pipe(gulp.dest('./app/tmp/styles'));
	done();
};



/**
 * define Gulp tasks:
 * gulp.task('process_name', execute_process_function);
 */
gulp.task('css', process_css);



/**
 * export functions
 */
module.exports.process_css = process_css; // export function to be called by other Gulp tasks
