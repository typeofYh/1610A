const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('server',()=>{
    gulp.src('.')
    .pipe(webserver({
        port:3000,
        middleware(req,res,next){
            
        }
    }))
})