/**
 * import Gulp and Gulp-plugins
 */
var gulp = require('gulp');
var postcss = require('gulp-postcss'); // auto-postprocessing of css code
var autoprefixer = require('autoprefixer'); // prefix css to vendor/browser specific css prefixes
var cssvars = require('postcss-simple-vars'); // support variables ins css files and convert to standard css code
var nested = require('postcss-nested'); // support nested commands in css files and convert to standard css code
var cleanCSS = require('gulp-clean-css'); // clean and minify css files
var cssImport = require('postcss-import'); // import multiple css files into one
var browserSync = require('browser-sync').create(); // import create method only from brwser-sync plugin



/**
 * define functions
 */
// simple console output
function process_console_out(done) {
	console.log("Hooray, I created a Gulp task, just start watching!");
	done();
};

// process html files
function process_html(done) {
	browserSync.reload();
	done();
};

// process css files
function process_css(done) {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
		//.pipe(cleanCSS())
		.pipe(gulp.dest('./app/tmp/styles'));
	done();
};

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
}

// watch html and css
function process_watch(done) {
	process_browserSync();
	gulp.watch('./app/**/*.html', process_html);
	gulp.watch('./app/assets/styles/**/*.css', gulp.series(process_css, process_cssInject));
	done();
};



/**
 * define Gulp tasks:
 * gulp.task('process_name', execute_process_function);
 */
gulp.task('console_out', process_console_out);
gulp.task('process_html', process_html);
gulp.task('process_css', process_css);
gulp.task('browserSync', process_browserSync);
gulp.task('watch', process_watch);
gulp.task('cssInject', process_cssInject);

//default Gulp task
gulp.task('default', gulp.series(process_console_out, process_watch));
