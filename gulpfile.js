const { src, dest, watch, series } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

function autoPrefix() {
  return src("./src/css/*.css")
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(dest("./dist/css"));
}

exports.autoPrefix = autoPrefix;