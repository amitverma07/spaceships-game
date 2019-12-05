const { src, dest, watch, series } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const imagemin = require('gulp-imagemin');

function autoPrefix() {
  return src("./src/css/*.css")
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(dest("./dist/css"));
}

function minifyCSS() {
  return src("./src/css/*.css")
    .pipe(cleanCSS())
    .pipe(dest("./dist/css"))
    .pipe(browserSync.stream());
}

function imgMinify() {
  return src("./src/images/*")
    .pipe(imagemin())
    .pipe(dest("./dist/images"));
}

exports.autoPrefix = autoPrefix;
exports.minifyCSS = minifyCSS;
exports.imgMinify = imgMinify;