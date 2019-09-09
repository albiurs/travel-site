/**
* import Gulp and Gulp plugins
*/
var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var del = require('del');

var configSvgSprite = {
	mode: {
		css: {
			sprite: 'sprite.svg',
			render: {
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
};

// process createSprite
function process_beginClean() {
	return del(['./app/tmp/sprite', './app/assets/images/sprites']);
}

function process_createSprite() {
	return gulp.src('./app/assets/images/icons/**/*.svg')
	.pipe(svgSprite(configSvgSprite))
	.pipe(gulp.dest('./app/tmp/sprite/'));
}

function process_copySpriteGraphic() {
	return gulp.src('./app/tmp/sprite/css/**/*.svg')
		.pipe(gulp.dest('./app/assets/images/sprites/'));
}

function process_copySpriteCSS() {
	return gulp.src('./app/tmp/sprite/css/*.css')
		.pipe(rename('_sprite.css'))
		.pipe(gulp.dest('./app/assets/styles/modules/'));
}

function process_endClean() {
	return del('./app/tmp/sprite');
}

/**
* define Gulp tasks:
* gulp.task('process_name', execute_process_function);
*/
gulp.task('beginClean', process_beginClean);
gulp.task('createSprite', process_createSprite);
gulp.task('copySpriteGraphic', process_copySpriteGraphic);
gulp.task('copySpriteCSS', process_copySpriteCSS);
gulp.task('endClean', process_endClean);
gulp.task('runSpriteTasks', gulp.series(process_beginClean, process_createSprite, process_copySpriteGraphic, process_copySpriteCSS, process_endClean));
