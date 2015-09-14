var gulp = require('gulp');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var argv = require('yargs').argv;
var request = require('request');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var rename = require('gulp-rename');
var babelify = require('babelify');
var browserify = require('browserify');
var uglifyify = require('uglifyify');
var watchify = require('watchify');
var sass = require('gulp-sass');
var streamify = require('gulp-streamify');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var merge = require('merge');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

var buildType = argv.release ? 'release' : 'debug';

gutil.log("buildType=" + buildType);
var entryPoint = './src/components/App.jsx';

var browserifyArgs = {
  entries: entryPoint,
  extensions: ['.jsx'],
  bundleExternal: true,
  detectGlobals: false,
  debug: buildType === 'debug' // generates inline sourcemaps
};

gulp.task('copy', function() {
   gulp.src('./src/img/**/*').pipe(gulp.dest('build/' + buildType + '/img'));
   gulp.src('./bower_components/rdash-ui/dist/fonts/**/*').pipe(gulp.dest('build/' + buildType + '/fonts'));
   gulp.src('./src/*.html').pipe(gulp.dest('build/' + buildType));
   gulp.src('./stubdata/*.json').pipe(gulp.dest('build/' + buildType + '/stubdata'));
});

gulp.task('sass', function() {
  // Build the main
  gulp.src(['./bower_components/rdash-ui/dist/css/rdash.css', './src/scss/main.scss'])
    .pipe(concat('app.css'))
    .pipe(sass())
    .pipe(gulp.dest('build/' + buildType + '/css'));
});

gulp.task('build', ['copy', 'sass', 'browserify']);

gulp.task('browserify', function() {
  var bundler = browserify(browserifyArgs)
    .transform(babelify, {/* options */ });

  return buildBundle(bundler);
});

// The watch task is only intended to run for debug
gulp.task('watch', function(cb) {
  // Watch for changes to the build/debug directory and
  // trigger an autoreload
  watch(["build/debug/*"], function(event) {
    gutil.log('autoreload', event.path);
    request({
      url: 'https://localhost:3000/autoreload/notify',
      method: 'post',
      json: {
        files: [event.path]
      },
      strictSSL: false
    });
  });

  // Watch *.scss files for changes and rebuild
  // our main.css
  gulp.watch('src/scss/*.scss', ['sass']);
  gulp.watch('src/*.html', ['copy']);

  // Setup watchify/browserify
  var bundler = watchify(browserify(merge(browserifyArgs, watchify.args)))
    .transform(babelify, { /* opts */ });

  buildBundle(bundler, this);

  bundler.on('update', function () {
    gutil.log('browserify bundle updated');
    buildBundle(bundler);
  });
});

function buildBundle(bundler) {
  return bundler.bundle()
    .on('error', handleError)
    .pipe(source(entryPoint))
    .pipe(buffer())
    .pipe(rename(buildType === 'debug' ? 'bundle.js' : 'bundle.min.js'))
    .pipe(gulpif(buildType === 'release', uglify()))
    .pipe(gulp.dest('build/' + buildType));
}

function handleError(err) {
  gutil.log("[ERROR] ", err.name, ": ", err.message.replace(new RegExp(__dirname, 'gi'), ''));
}
