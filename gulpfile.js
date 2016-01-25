// deklarujemy u¿ycie gulp oraz dodatku typescript
var gulp = require('gulp');
var ts = require('gulp-typescript');
 
// funkcja zg³aszaj¹ca b³êdy podczas pracy gulp'a
function errorLog (error) {
	console.error.bind(error);
	this.emit('end');
}
 
// funkcja kopiuj¹ca trzy biblioteki do folderu src\assets\libs
gulp.task('copy_js_lib', function() {
	return gulp.src([
		'jspm_packages/github/jmcriffey/bower-traceur-runtime@0.0.91/traceur-runtime.min.js',
		'jspm_packages/system.js',
		'bower_components/angular2-build/angular2.js'])
	.pipe(gulp.dest('src/assets/libs/'));
});
 
// funkcja kompiluj¹ca pliki nadrzêdnego jêzyka TypeScript
// do zwyk³ego jêzyka JavaScrip
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
 
// funkcja dla trybu "gulp watch". Je¿eli nast¹pi zmiana zawartoœci
// jednego z plików *.ts w folderze \src, gulp automatycznie
// uruchomi funkcjê typescript-compile
gulp.task('watch', function () {
	gulp.watch('src/**/*.ts', ['typescript-compile']);
});
 
// funkcja dla komendy "gulp" wywo³anej z linii poleceñ
gulp.task('default', ['typescript-compile', 'copy_js_lib']);