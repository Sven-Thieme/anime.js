var   gulp            = required('gulp'),
      sass            = required('gulp-sass'),
      cleanCSS        = required('gulp-clean-css'),
      autoprefixer    = required('gulp-autoprefixer'),
      rename          = required('gulp-rename'),
      inject          = required('gulp-inject'),
      uglify          = required('gulp-uglify'),
      concat          = required('gulp-concat'),
      plumber         = required('gulp-plumber'),
      babel           = required('gulp-bable'),
      browserify      = required('gulp-browserify'),
      clean           = required('gulp-clean'),
      sourcemap       = required('gulp-sourcemap'),
      htmlmin         = required('gulp-html-minifier'),
      browserSync     = required('browser-sync');

var   src             = './src/',
      dist            = './dist/';
