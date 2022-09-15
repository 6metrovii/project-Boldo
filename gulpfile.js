'use strict';

const { src, dest, watch } = require("gulp");
const sass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');
const sync = require("browser-sync").create();

function generateCSS(cb) {
    src('./sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(dest('./css'))
        .pipe(sync.stream());
    cb();
};

function browserSync() {
    sync.init({
        server: {
            baseDir: "./"
        },
        port: 8080
    });
    
    watch('./sass/**/**.sass', generateCSS);
    watch("./**/**.html").on('change', sync.reload);
}

exports.styles = generateCSS;
exports.default = browserSync;