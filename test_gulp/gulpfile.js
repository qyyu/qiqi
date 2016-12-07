
var del=require('del');
var gulp=require('gulp');
var jshint=require("gulp-jshint");
var uglify=require('gulp-uglify');//压缩js
var imagemin=require('gulp-imagemin');//压缩图片
var mincss=require('gulp-clean-css');//压缩css
var inline=require('gulp-inline-source'); //资源内联 （主要是js，css，图片）
var include=require('gulp-include'); //资源内联（主要是html片段）
var concat=require('gulp-concat');
var useref=require('gulp-useref'); //合并文件
var gulpif=require('gulp-if'); //gulp条件判断
var connect=require('gulp-connect'); //本地服务器
var sequence=require('gulp-sequence');



//清理构建目录
gulp.task('clean',function (cb) {
    del(['last']).then(function () {
        cb();
    })
});


gulp.task('css',function () {
    return gulp.src('./src/css/*.css')
        .pipe(mincss())
        .pipe(gulp.dest('last/css'))
});

gulp.task('img', function () {
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('last/images'))
});

gulp.task('jshint',function () {
   gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter());
});
gulp.task('js',function () {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('last/js'))
});
gulp.task('concat',function () {
    return gulp.src('./src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('last/js'))
});



gulp.task('html', function () {
    return gulp.src('./src/*.html')
        .pipe(inline())//把js内联到html中
        .pipe(include())//把html片段内联到html主文件中
        .pipe(useref())//根据标记的块  合并js或者css
        .pipe(gulpif('*.js',uglify()))
        .pipe(gulpif('*.css',mincss()))
        .pipe(connect.reload()) //重新构建后自动刷新页面
        .pipe(gulp.dest('last'));
});


//本地服务器  支持自动刷新页面
gulp.task('connect', function() {
    connect.server({
        root: './last', //本地服务器的根目录路径
        port:9800,
        livereload: true
    });
});
//sequence的返回函数只能运行一次 所以这里用function cb方式使用
gulp.task('watchlist',function (cb) {
    sequence('clean','jshint',['css','img','concat','js','html'])(cb)
});

gulp.task('watch',function () {
    gulp.watch(['./src/**'],['watchlist']);
});


//中括号外面的是串行执行， 中括号里面的任务是并行执行。
gulp.task('default',function (cb) {
    sequence('clean','jshint',['css','img','js','concat','html','connect'],'watch')(cb)
});


