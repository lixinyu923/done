const gulp=require("gulp");
const sass=require("gulp-sass");
const webserver=require("gulp-webserver");

gulp.task("devCss",()=>{
    return gulp.src("./src/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./src/css"))
})

gulp.task("server",()=>{
    return gulp.src("./src")
    .pipe(webserver({
        port:8989,
        open:true,
        proxies:[
            {
                source:"/api/getuser",
                target:"http://localhost:3000/api/getuser"
            },{
                source:"/api/getlist",
                target:"http://localhost:3000/api/getlist"
            }
        ]
    }))
})

gulp.task("watch",()=>{
    gulp.watch("./src/scss/**/*.scss",gulp.series("devCss"));
})

gulp.task("default",gulp.parallel("watch","server"))