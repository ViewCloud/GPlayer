import browserSync, {reload} from 'browser-sync';
import gulp from 'gulp';
import babel from 'gulp-babel';
import order from 'gulp-order';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

import config from './config';
const {GPlayerPro, destDir} = config.dir;

gulp.task('browser_sync', ()=> {
  browserSync({
    server: {
      baseDir:destDir
    }
  })
})

gulp.task('GPlayerPro', ()=> {
    gulp.src([
      'node_modules/video.js/dist/ie8/videojs-ie8.min.js',
      'node_modules/video.js/dist/video.min.js',
      'node_modules/dashjs/dist/dash.all.min.js',
      'node_modules/videojs-contrib-hls/dist/videojs-contrib-hls.min.js',
      'node_modules/videojs-contrib-dash/dist/videojs-dash.min.js',
      'src/GPlayer.js'
    ])
    .pipe(concat('GPlayerPro.js'))
    .pipe(uglify())
    .pipe(gulp.dest(GPlayerPro))

})

gulp.task('js', ()=> {
  gulp.src('src/guan-html5player.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('guan-html5player.js'))
    .pipe(gulp.dest(destDir))
})

gulp.task('css', ()=> {
  gulp.src('node_modules/video.js/dist/video-js.min.css')
    .pipe(gulp.dest(GPlayerPro))
})

gulp.task('production', ()=> {
  gulp.start('GPlayerPro');
  gulp.start('css');
})
