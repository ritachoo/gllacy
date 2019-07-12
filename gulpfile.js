const { src, dest, parallel } = require('gulp')
const minifyCSS = require('gulp-csso')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

function css() {
  return src(['css/**/*.css', '!css/**/*.min.css'])
    .pipe(minifyCSS())
    .pipe(rename(function (path) {
      path.basename += '.min'
    }))
    .pipe(dest('css'))
}

function js() {
  return src(['js/**/*.js', '!js/**/*.min.js'])
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += '.min'
    }))
    .pipe(dest('js'))
}

exports.js = js
exports.css = css
exports.default = parallel(css, js)
