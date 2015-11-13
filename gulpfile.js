var gulp   = require('gulp'),
    $      = require('gulp-load-plugins')({ lazy: true }),
    config = require('./config/gulp.config');

gulp.task('templates', function () {
    gulp.src(config.files.templates)
        .pipe($.plumber())
        .pipe(gulp.dest(config.folders.dest))
        .pipe($.connect.reload());
});

gulp.task('build', ['templates']);

gulp.task('watch', ['build'], function () {
    gulp.watch(config.files.templates, ['templates']);
});

gulp.task('server', ['build'], function() {
    $.connect.server(config.server);
});

gulp.task('dev', ['watch', 'server']);

gulp.task('help', $.taskListing);

gulp.task('default', ['help']);
