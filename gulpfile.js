
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var debug = require('gulp-debug');
var path = require('path');
var watch = require('gulp-watch');


gulp.task('default', ['test','watch']);

function runTests(){
    return gulp.src('**/*.test.js')
            .pipe(debug())
            .pipe(mocha({
                require: [path.resolve(__dirname, './test/support/node')]
            }));
}


gulp.task('watch', function(){
    var watchtests = watch('**/*.test.js', function(){
        return runTests(); 
    });
});

gulp.task('test', runTests); 

