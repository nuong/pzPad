var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less'),
    connect = require('gulp-connect');
var htmlSources =['*.html'];
var cssSources = ['css/*.css'];
var jsSources = ['js/*.js'];
var allSources = htmlSources.concat(cssSources).concat(jsSources);
gulp.task('connectServer', function() {
  connect.server({
    livereload: true,
    port: 3001
  });
});
gulp.task('reloadSever', function() {
  gulp.src(allSources)
    .pipe(connect.reload());
});

gulp.task('lessCompile', function(){
    return gulp.src('./less/lnsStyle.less')
    .pipe(concat('style.css'))
    .pipe(less())
    .pipe(gulp.dest('./css'))
});

gulp.task('watchLess', function(){
    gulp.watch('./less/**/*.less', ['lessCompile']);
});
gulp.task('watchSource', function(){
    gulp.watch(allSources, ['reloadSever']);
});

gulp.task('default', ['connectServer','lessCompile','watchLess'])