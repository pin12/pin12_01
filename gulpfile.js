var gulp = require('gulp');
var watch = require('gulp-watch'); 
var postcss = require('gulp-postcss'); 
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars'); // Adds support for variables in css
var cssNested = require('postcss-nested'); // Adds support for nested css 
var cssImport = require('postcss-import');

gulp.task('default', function() {
    console.log('Default task is called and run.');
});

gulp.task('html', function(){
    console.log('Hooray html-task is callled');
});

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, cssNested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {
    
    watch('./app/index.html', function() {
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });
});
