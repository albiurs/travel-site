/**
 * import Gulp and Gulp plugins
 */
var gulp = require('gulp');
var processWatch = require('./gulp/tasks/watch.js');



/**
 * import Gulp files
 */
require('./gulp/tasks/styles');
require('./gulp/tasks/watch');



/**
 * define functions
 *
 */
// simple console output
function process_console_out(done) {
	console.log("Start watching, happy coding!");
	done();
};

// process watch
function process_watch(done) {
	processWatch.process_watch(); // import/call function from watch.js
	done();
}



/**
 * define Gulp tasks:
 * gulp.task('process_name', execute_process_function);
 */
gulp.task('default', gulp.series(process_console_out, process_watch));
