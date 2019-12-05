const { src, dest, watch, series } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const imagemin = require("gulp-imagemin");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const gulpCopied = require("gulp-copy");

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

function js() {
  return src(["./src/js/resources.js", "./src/js/app.js", "./src/js/engine.js"])
    .pipe(babel({
      presets: [
        ['@babel/preset-env', { modules: false }]
      ]
    }))
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(dest("./dist/js"));
}

function copyHTML() {
  return src("./src/index.html", { base: 'src' })
    .pipe(gulpCopied("./dist", { prefix: 1 }))
    .pipe(dest("./dist"))
    .pipe(browserSync.stream());
}

exports.autoPrefix = autoPrefix;
exports.minifyCSS = minifyCSS;
exports.imgMinify = imgMinify;
exports.js = js;
exports.copyHTML = copyHTML;