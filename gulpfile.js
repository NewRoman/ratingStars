// для ускорения компиляции скриптов необходимо поисправлять все ошибки, которые находит jshint (показывает в консоли при работе gulp)
// или временно отключить jshint в тех тасках, которые используются в данный момент
// #todo давайте jshint и debug включать когда что-то разрабатываем, а в репо скидывать отключая их

var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
	gutil = require('gulp-util')
	;

	var onError = function (err) {
	    gutil.log(gutil.colors.red('ERROR', 'less'), err);
	    this.emit('end', new gutil.PluginError('less', err, { showStack: true }));
	};

// запуск gulp less
gulp.task('less', function () {
	var lessArray; 
	var gulpDest; 

	gulpDest = 'css/';
	lessArray = [ 

    'less/main.less', 
	
	];
    return gulp.src(lessArray)
		// .pipe(sourcemaps.init()) // инициализируем sourcemap/
		.pipe(less({compress: true}).on('error', onError))
		// .pipe(sourcemaps.write()) // пропишем карты
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(gulpDest));
});

// очистка папок
// запуск gulp clean
gulp.task('clean', function () {
	var cleanTask; // массив с путями папок для очистки
	cleanTask = ['css/*'];

    return gulp.src(cleanTask)
        .pipe(clean());
});


// запустить все основные таски
// запуск gulp default
gulp.task('default', ['clean'], function () {
	var defaultTasksArray = [];

    defaultTasksArray = [
		'less'
	];

    defaultTasksArray.forEach(function (val) {
        gulp.start(val);
    });
});

// следить за изменениями во всех файлах less и в скриптах 
// gulp watch
gulp.task('watch', function () {
	var lessPaths; // пути для стилей
	lessPaths = [
					'less/*.less'
				];

    var less = gulp.watch(lessPaths, ['less']);
});