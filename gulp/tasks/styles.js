var gulp = require('gulp');
var postcss = require('gulp-postcss'); 
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars'); // Adds support for variables in css
var cssNested = require('postcss-nested'); // Adds support for nested css 
var cssImport = require('postcss-import');

gulp.task('styles', function () {
    return gulp.src('./app/assets/css/main.css')
        .pipe(postcss([cssImport, cssvars, cssNested, autoprefixer]))
        .on('error', function(errorInfo) { // errorInfo is een willekeurige naam, een parameter van de functie
            console.log(errorInfo.toString()); // log de errorInfo
            this.emit('end'); // Ga door naar het einde van de taak maar laat de watch task gewoon doorlopen
        })
        .pipe(gulp.dest('./app/temp/css'));
});