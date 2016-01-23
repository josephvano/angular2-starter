"use strict"

import gulp     from "gulp";
import del      from "del";
import rename   from "gulp-rename";
import babel    from "gulp-babel";

// CLI tasks
gulp.task("default", ["clean", "compile"]);

// Tasks
gulp.task("clean", ()=>{
  del("build");
});

gulp.task("compile", ()=> {
  //TODO:
});
