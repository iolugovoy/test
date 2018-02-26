var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'), 
    autoprefixer = require('gulp-autoprefixer'),
    // svgSprite = require("gulp-svgstore"),
    fileinclude = require('gulp-file-include'),
    concat = require('gulp-concat');
    //uglify = require('gulp-uglify');
    




gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'dist' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'sass', 'fileinclude', 'scripts'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass', browserSync.reload]); // Наблюдение за sass файлами
    gulp.watch('app/**/*.html', ['fileinclude', browserSync.reload]); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', ['scripts', browserSync.reload]); // Наблюдение за JS файлами в папке js
});

gulp.task('clear', function () {
    return cache.clearAll();


})

gulp.task('sass', function() {
    return gulp.src('app/sass/main.sass')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream: true}))
});
// gulp.task('sprites', function () {
//     return gulp.src('app/img/svg/*.svg')
//         .pipe(svgSprite())
//         .pipe(gulp.dest("app/img/sprite"));
// });

gulp.task('fileinclude', function() {
  gulp.src(['app/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('scripts', function() {
    return gulp.src(['app/js/vendor/*.js', 'app/js/*.js'])
        .pipe(concat('main.js')) 
//        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('dist/js/')); 
});

gulp.task('default', ['watch']);