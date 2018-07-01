import gulp from 'gulp'
import nunjucksRender from 'gulp-nunjucks-render'
import changed from 'gulp-changed'
// import debug from 'gulp-debug'
// import gutil from 'gulp-util'
import notify from 'gulp-notify'
import fs from 'fs'

const Config = require('../config')

export function nunjucksPages() {
  nunjucksRender.nunjucks.configure([Config.src.templates])
  return gulp.src(Config.src.pages)
    .pipe(changed(Config.dist.pages, {
      hasChanged: changed.compareLastModifiedTime
    }))
    .pipe(nunjucksRender({
      path: Config.config.templates,
      ext: Config.fileExt
    }))
    .on('error', notify.onError(function(error) {
      return 'An error occurred while compiling files.\nLook in the console for details.\n' + error
    }))
    // .pipe(debug({
    //   title: 'nunjucks pages:'
    // }))
    // .on('data', function() {
    //   gutil.log('Alert nunjucksPages()!')
    // })
    .pipe(gulp.dest(Config.dist.pages))
}

// Temporary workaround to get HTML injection working when editing pages is to create duplicate task and not include the caching plugin
export function nunjucksTemplates() {
  nunjucksRender.nunjucks.configure([Config.src.templates])
  return gulp.src([Config.src.pages])
    .pipe(nunjucksRender({
      path: Config.config.templates,
      ext: Config.fileExt
    }))
    .on('error', notify.onError(function(error) {
      return 'An error occurred while compiling files.\nLook in the console for details.\n' + error
    }))
    .pipe(gulp.dest(Config.dist.pages))
}
