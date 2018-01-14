var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create(); // .create() is een method die een nieuwe liver server aanmaakt

gulp.task('watch', function () {
    // browser-sync initializes a server which has a base directory in the 'app' folder (contains the index.html)
    browserSync.init({
        notify: false, // Hides a little black box in the top right of the browserwindow which tells browsersync did stuff.
        server: {
            baseDir: "app" // folder which contains the index.html
        }
    });
    watch('./app/index.html', function () {
        browserSync.reload();
    });
    watch('./app/assets/css/**/*.css', function () {
        gulp.start('cssInject');
    });
});

// injecteert css code zonder een reload van de browser. Dit is vooral handig wanneer je werkt met javascript
gulp.task('cssInject', ['styles'], function () { // 'styles' is a dependency for 'cssInject'. 'styles' has to finsh before 'cssInject'
    return gulp.src('./app/assets/css/main.css')
        .pipe(browserSync.stream());
});