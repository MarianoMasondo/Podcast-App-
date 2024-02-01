const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"))

function css(done){
    src("src/scss/app.scss") //identificar el archivo principal
    .pipe(sass()) //compilar SASS
    .pipe(dest("build/css")) //Exportarlo o guardarlo en una ubicación

    done();
}

function dev(){
    watch("src/scss/a**/*.scss", css)
}
exports.css = css;
exports.dev = dev;