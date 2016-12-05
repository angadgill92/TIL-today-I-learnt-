const gulp = require('gulp')

// introductory
gulp.task('default', () => {
  console.log('Say Hi to Gulp !')
})

gulp.task('doThisFirst', () => {
  console.log('minifying stuff')
})

gulp.task('doThisNext', () => {
  console.log('Phew !! Finally Done !')
})

gulp.task('default', ['doThisFirst', 'doThisNext'])

// using streams

// gulp.src()
