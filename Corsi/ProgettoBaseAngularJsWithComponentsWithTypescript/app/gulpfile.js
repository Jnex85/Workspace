var gulp = require('gulp');

gulp.task('hello', function() {
    console.log('Hello Giuseppe - starting tasks...');
});

gulp.task('materialCss', function () {
  gulp.src('../node_modules/angular-material/angular-material.min.css')
   .pipe(gulp.dest('../app/css'));
});

gulp.task('materialIconsCss', function () {
    gulp.src('../node_modules/angular-material-icons/angular-material-icons.css')
     .pipe(gulp.dest('../app/css'));
});

gulp.task('AngularJs', function () {
    gulp.src('../node_modules/angular/angular.js')
     .pipe(gulp.dest('../app/js/libraries'));
});

gulp.task('AngularAnimateJs', function () {
    gulp.src('../node_modules/angular-animate/angular-animate.js')
     .pipe(gulp.dest('../app/js/libraries'));
});

gulp.task('AngularAriaJs', function () {
    gulp.src('../node_modules/angular-aria/angular-aria.js')
     .pipe(gulp.dest('../app/js/libraries'));
});

gulp.task('AngularMaterialJs', function () {
    gulp.src('../node_modules/angular-material/angular-material.js')
     .pipe(gulp.dest('../app/js/libraries'));
});

gulp.task('AngularMessagesJs', function () {
    gulp.src('../node_modules/angular-messages/angular-messages.js')
     .pipe(gulp.dest('../app/js/libraries'));
});

gulp.task('AngularMaterialIconsJs', function () {
    gulp.src('../node_modules/angular-material-icons/angular-material-icons.js')
     .pipe(gulp.dest('../app/js/libraries'));
});

gulp.task('end', function() {
    console.log('Bye Giuseppe - tasks done!');
});


gulp.task('build', [`hello`,
    `materialCss`,
    `materialIconsCss`,
    `AngularJs`,
    `AngularAnimateJs`,
    `AngularAriaJs`,
    `AngularMaterialJs`,
    `AngularMessagesJs`,
    `AngularMaterialIconsJs`,
    `end`],
    function (){
    console.log('Building files');
});
