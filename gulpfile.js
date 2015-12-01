var gulp   = require('gulp'),
    $      = require('gulp-load-plugins')({ lazy: true }),
    env    = process.env.NODE_ENV || 'development',
    config = require('./config/gulp.config');

gulp.task('templates', function () {
    gulp.src(config.files.templates)
        .pipe($.plumber())
        .pipe($.jade())
        .pipe(gulp.dest(config.folders.dest))
        .pipe($.connect.reload());
});

gulp.task('styles:libs', function () {
    gulp.src(config.files.styles.libs)
        .pipe($.plumber())
        .pipe(gulp.dest(config.styles.destFolder))
        .pipe($.connect.reload());
});

gulp.task('styles:main', function () {
    gulp.src(config.styles.mainFile)
        .pipe($.plumber())
        .pipe($.sass())
        .pipe($.if(env === 'production', $.minifyCss()))
        .pipe(gulp.dest(config.styles.destFolder))
        .pipe($.connect.reload());
});

gulp.task('images', function () {
    gulp.src(config.files.images)
        .pipe($.plumber())
        .pipe(gulp.dest(config.images.destFolder))
        .pipe($.connect.reload());
});

gulp.task('scripts:libs', function () {
    gulp.src(config.files.scripts.libs)
        .pipe($.plumber())
        .pipe($.concat(config.scripts.libs.outFile))
        .pipe(gulp.dest(config.scripts.destFolder))
        .pipe($.connect.reload());
});

gulp.task('scripts:main', function () {
    gulp.src(config.files.scripts.main)
        .pipe($.plumber())
        .pipe($.concat(config.scripts.main.outFile))
        .pipe($.if(env === 'production', $.uglify()))
        .pipe(gulp.dest(config.scripts.destFolder))
        .pipe($.connect.reload());
});

gulp.task('fonts', function () {
    gulp.src(config.files.fonts)
        .pipe($.plumber())
        .pipe(gulp.dest(config.fonts.destFolder))
        .pipe($.connect.reload());
});

gulp.task('cname', function () {
    gulp.src(config.files.cname)
        .pipe($.plumber())
        .pipe(gulp.dest(config.folders.dest))
        .pipe($.connect.reload());
});

gulp.task('build', ['templates', 'styles:libs', 'styles:main', 'images', 'scripts:libs', 'scripts:main', 'fonts', 'cname']);

gulp.task('watch', ['build'], function () {
    gulp.watch(config.files.templates, ['templates']);
    gulp.watch(config.files.styles.libs, ['styles:libs']);
    gulp.watch(config.files.styles.main, ['styles:main']);
    gulp.watch(config.files.images, ['images']);
    gulp.watch(config.files.scripts.libs, ['scripts:libs']);
    gulp.watch(config.files.scripts.main, ['scripts:main']);
    gulp.watch(config.files.fonts, ['fonts']);
    gulp.watch(config.files.cname, ['cname']);
});

gulp.task('server', ['build'], function() {
    $.connect.server(config.server);
});

gulp.task('clean', function () {
    gulp.src(config.folders.dest)
        .pipe($.clean());
});

gulp.task('dev', ['watch', 'server']);

gulp.task('help', $.taskListing);

gulp.task('default', ['help']);
