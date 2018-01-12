var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
    console.log('Default task is called and run.');
});

gulp.task('html', function(){
    console.log('Hooray html-task is callled');
});

gulp.task('styles', function(){
    console.log('Styles task is called and run');
});

gulp.task('watch', function() {
    
    watch('./app/index.html', function() {
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });
});