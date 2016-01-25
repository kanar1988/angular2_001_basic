// deklarujemy u�ycie gulp oraz dodatku typescript
var gulp = require('gulp');
var ts = require('gulp-typescript');
 
// funkcja zg�aszaj�ca b��dy podczas pracy gulp'a
function errorLog (error) {
	console.error.bind(error);
	this.emit('end');
}
 
// funkcja kopiuj�ca trzy biblioteki do folderu src\assets\libs
gulp.task('copy_js_lib', function() {
	return gulp.src([
		'jspm_packages/github/jmcriffey/bower-traceur-runtime@0.0.91/traceur-runtime.min.js',
		'jspm_packages/system.js',
		'bower_components/angular2-build/angular2.js'])
	.pipe(gulp.dest('src/assets/libs/'));
});
 
// funkcja kompiluj�ca pliki nadrz�dnego j�zyka TypeScript
// do zwyk�ego j�zyka JavaScrip
gulp.task('typescript-compile', function(){
	return gulp.src('src/**/*.ts')
	.pipe(ts({
		module: 'commonjs',
		target : 'ES5',
		emitDecoratorMetadata: true,
		declarationFiles: false,
		noExternalResolve: true
	}))
	.js.pipe(gulp.dest('src'));
});
 
// funkcja dla trybu "gulp watch". Je�eli nast�pi zmiana zawarto�ci
// jednego z plik�w *.ts w folderze \src, gulp automatycznie
// uruchomi funkcj� typescript-compile
gulp.task('watch', function () {
	gulp.watch('src/**/*.ts', ['typescript-compile']);
});
 
// funkcja dla komendy "gulp" wywo�anej z linii polece�
gulp.task('default', ['typescript-compile', 'copy_js_lib']);