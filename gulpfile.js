var gulp = require("gulp");
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require("gulp-uglify");

gulp.task("default", function() {

  return gulp.src("src/**/*.js")
    // Traces all modules and outputs them in the correct order.
      .pipe(concat("backbone-bootbox-view.js"))
      .pipe(gulp.dest("dist"))
      .pipe(uglify({
        preserveComments: 'some'
      }))
      .pipe(rename(function(path) {
        if (path.extname === '.js') {
          path.basename += '.min';
        }
      }))
      .pipe(gulp.dest("dist"));

});