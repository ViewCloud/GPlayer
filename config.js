export default {
    server: {
        port: 8000
    },
    dir: {
        srcDir: __dirname + '/src/',
        buildDir: __dirname + '/__build__/',
        destDir : __dirname + '/dist/',
        GPlayerPro: __dirname + '/examples/GPlayer-pro/',
        GPlayerDev: __dirname + '/examples/GPlayer-dev/',
        jsDir: 'js/',
    },
    css: {
        autoprefixer: ['> 98%']
    },
    videojs: {
      videojs: __dirname + '/node_modules/'
    },
    javascript: {
        entry: ['index.js'],
        babel: { presets: ['es2015', 'stage-0'] }
    }
};
