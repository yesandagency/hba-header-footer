const gulp = require("gulp");
const purgecss = require("gulp-purgecss");

gulp.task("purgecss", () => {
  return gulp
    .src("src/**/*.css")
    .pipe(
      purgecss({
        content: ["**/*.html"],
      })
    )
    .pipe(gulp.dest("build/css"));
});
