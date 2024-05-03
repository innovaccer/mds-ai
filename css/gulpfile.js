const gulp = require("gulp");
const postcss = require("gulp-postcss");
const cleaner = require("gulp-clean");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const postcssColorMod = require("postcss-color-mod-function");
const autoprefixer = require("autoprefixer");

const materialIcons = "./material-design-icons/iconfont/material-icons.css";
const materialFont = "./material-design-icons/iconfont/*.{ttf,otf,woff2}";

const sources = [
  "./src/tokens/*.css",
  "./src/variables/*.css",
  "./src/components/*.css",
  materialIcons,
];

function css() {
  return gulp
    .src(sources)
    .pipe(concat("index.css"))
    .pipe(sourcemaps.init())
    .pipe(postcss([postcssColorMod()]))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist"));
}

function watch() {
  gulp.watch("./src/*.css", css);
}

function clean() {
  return gulp.src("./dist/*", { allowEmpty: true }).pipe(cleaner());
}

function font() {
  return gulp.src([materialFont]).pipe(gulp.dest("./dist"));
}

exports.css = css;
exports.watch = watch;
exports.build = gulp.series(clean, gulp.parallel(css, font));

exports.clean = clean;

gulp.task("watch", () => {
  gulp.watch(sources, gulp.series(css));
});
