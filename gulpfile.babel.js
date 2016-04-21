import browserSync, {reload} from 'browser-sync';
import gulp from 'gulp';
import babel from 'gulp-babel';
import order from 'gulp-order';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import del from 'del';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import buffer from 'vinyl-buffer';
import config from './config';
const {srcDir, GPlayerPro, GPlayerDev, destDir} = config.dir;

gulp.task('browser_sync', ()=> {
  browserSync({
    server: {
      baseDir:destDir
    }
  })
})

gulp.task('copyLib', () => {
  gulp.src([
    'node_modules/dashjs/dist/dash.all.min.js',
    'node_modules/videojs-contrib-hls/dist/videojs-contrib-hls.min.js',
    'node_modules/videojs-contrib-dash/dist/videojs-dash.min.js',
    'node_modules/video.js/dist/video-js.min.css'
  ])
  .pipe(gulp.dest(destDir + 'GPlayer/lib/'))
})

gulp.task('copySwf', ()=> {
  gulp.src([
    'src/swf/GgPlugin.swf',
    'src/swf/TanVodPlayer.swf'
  ])
  .pipe(gulp.dest(destDir + 'GPlayer/swf/'))
})
// concat all plugins
gulp.task('GPlayerAll', ()=> {
    gulp.src([
      'node_modules/video.js/dist/ie8/videojs-ie8.min.js',
      'node_modules/video.js/dist/video.min.js',
      'node_modules/dashjs/dist/dash.all.min.js',
      'node_modules/videojs-contrib-hls/dist/videojs-contrib-hls.min.js',
      'node_modules/videojs-contrib-dash/dist/videojs-dash.min.js',
      'src/GPlayer.js'
    ])
    .pipe(concat('GPlayerAll.js'))
    .pipe(uglify())
    .pipe(gulp.dest(GPlayerPro))

})

gulp.task('GPlayerPro', ()=> {
    gulp.src([
      'node_modules/video.js/dist/video.min.js',
      'src/GPlayer.js'
    ])
    .pipe(concat('GPlayer.js'))
    // .pipe(uglify())
    .pipe(gulp.dest(destDir + 'GPlayer/'))

})

gulp.task('cleanPro', ()=> {
  del(destDir + 'GPlayer/');
})

gulp.task('cleanDev', ()=> {
  del([GPlayerDev + 'GPlayerDev.js']);
})

// gulp.task('es6-commonjs', ['cleanDev'], ()=> {
//   gulp.src('./src/**/*.js')
//     .pipe(babel())
//     .pipe(gulp.dest('src/temp'))
// })
//
// gulp.task('commonjs-bundle', ['es6-commonjs'], ()=> {
//   browserify({entries: './src/temp/GPlayer.js', debug: true})
//     .transform(babelify, {presets: ["es2015"]})
//     .bundle()
//     .pipe(source('GPlayerDev.js'))
//     .pipe(gulp.dest(GPlayerDev))
// })

gulp.task('es6', ()=> {

  browserify({entries: './src/GPlayer.js', debug: true})
    .transform(babelify, {presets: ["es2015"]})
    .bundle()
    .pipe(source('GPlayerDev.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(GPlayerDev + 'GPlayer/'))

})

gulp.task('js', ()=> {
  gulp.src('src/GPlayer.js')
    .pipe(uglify())
    .pipe(gulp.dest(GPlayerDev))
})

gulp.task('css', ()=> {
  gulp.src('node_modules/video.js/dist/video-js.min.css')
    .pipe(gulp.dest(GPlayerPro))
})

// production environment gulp tasks stream
gulp.task('pro', ['cleanPro', 'copyLib', 'copySwf'], ()=> {
  gulp.start('GPlayerPro', 'css')
})

// develop environment gulp tasks stream
gulp.task('dev', ['cleanDev'], ()=> {
  gulp.start('js')
})
