import util from 'gulp-util'

// Disable or enable pop up notifications
const notifications = true
if (!notifications) {
  process.env.DISABLE_NOTIFIER = true // Uncomment to disables all notifications
}

// Paths
const fileExt = '.html' // Default file extension
const source = 'src'
const root = '.'
const dest = 'dist'
const assets = 'assets'

const src = {
  pages: `${root}/${source}/pages/*${fileExt}`,
  templates: `${root}/${source}/templates/**/*${fileExt}`,
  scss: `${root}/${source}/styles/**/*.scss`,
  webpack: `${root}/${source}/scripts/**/*.js`,
  img: `${root}/${source}/img/**/*.{jpg,gif}`,
  imgPng: `${root}/${source}/img/**/*.png`,
  fonts: `${root}/${source}/fonts/**/*`,
}

const dist = {
  pages: `${root}/${dest}`,
  css: `${root}/${dest}`,
  webpack: `${root}/${dest}/${assets}/js`,
  img: `${root}/${dest}/${assets}/img`,
  fonts: `${root}/${dest}/${assets}/fonts`,
  production: `${root}/production`
}

const config = {
  reports: `.${root}/reports`, // Lint reports saved here
  lint: `${root}/${source}/styles/**/*.scss`, // Path of SCSS files that you want to lint
  lintExclude: `!${root}/${source}/styles/vendor/**/*.scss`, // Path of SCSS files that you want to exclude from lint
  templates: [`${root}/${source}/templates/`, `${source}/templates/partials/`], // Default file paths for nunjucks
  pagesWatch: `${root}*${fileExt}`, // HTML injection  - This is the directory where pages are output
  production: !!util.env.production, // Used for production deployment
  criticalCss: `${dist.production}/test.css` // Accepts arrays
}

module.exports = {
  source,
  dest,
  assets,
  fileExt,
  src,
  dist,
  config,
}
