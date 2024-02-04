const { src, dest, watch, series } = require("gulp");

//compilar css
const sass = require("gulp-sass")(require("sass"))

//imagenes
const imagemin = require('gulp-imagemin');

function css(done){
    src("src/scss/app.scss") //identificar el archivo principal
    .pipe(sass()) //compilar SASS
    .pipe(dest("build/css")) //Exportarlo o guardarlo en una ubicación

    done();
}

function dev(){
    
    watch("src/scss/**/*.scss", css)
}

function imagenes(done) {
    src('src/img/**/*')
        .pipe(imagemin({optimizationLevel: 3}))
        .pipe(dest('build/img'))
    done();
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.default = series(imagenes, css, dev);