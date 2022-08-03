
import gulp from 'gulp';

// const browserSync = require('browser-sync').create();

import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';

import gulpif from 'gulp-if';


import path from '../config/path.js';
import app from '../config/app.js'


const img = () => {
    return gulp.src(path.img.src)
    
    .pipe(newer(path.img.dest))

    .pipe(gulp.dest(path.img.dest))
    .pipe(gulp.src(path.img.src))
    .pipe(newer(path.img.dest))
    .pipe(gulpif(app.isProd, imagemin(app.imagemin)))
    .pipe(gulp.dest(path.img.dest))
    
}

export default img;