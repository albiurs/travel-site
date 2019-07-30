/**
 * import Gulp and Gulp plugins
 */
var gulp = require('gulp');
var browserSync = require('browser-sync').create(); // import create method only from brwser-sync plugin
var processCss = require ('./styles');



/**
 * define functions
 */
// browser-sync static server
function process_browserSync() {
	browserSync.init({
		server: {
			baseDir: "./app/"
		}
	});
};

// browser-sync CSS inject
function process_cssInject(done) {
	return gulp.src('./app/tmp/styles/styles.css')
		.pipe(browserSync.stream());
	done();
};

//process html files
function process_html(done) {
	browserSync.reload();
	done();
};

// process css
function process_css(done) {
	processCss.process_css(); // import/call function from styles.js
	done();
}

// watch html and css
function process_watch() {
	process_browserSync();
	gulp.watch('./app/**/*.html', process_html);
	gulp.watch('./app/assets/styles/**/*.css', gulp.series(process_css, process_cssInject));
};



/**
 * define Gulp tasks:
 * gulp.task('process_name', execute_process_function);
 */
gulp.task('watch', process_watch);



/**
 * export functions
 */
module.exports.process_watch = process_watch; // export function to be called by other Gulp tasks
