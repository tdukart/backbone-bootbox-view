var gulp = require("gulp");
var concat = require('gulp-concat');
var uglify = require("gulp-uglify");

gulp.task("compile", function () {

  return gulp.src("src/**/*.js")
    // Traces all modules and outputs them in the correct order.
      .pipe(concat("backbone-bootbox-view.js"))
      .pipe(uglify({
        preserveComments: 'some'
      }))
      .pipe(gulp.dest("dist"));

});