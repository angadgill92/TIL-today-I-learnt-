const gulp = require('gulp')

gulp.task('default', () => {
  console.log('Say Hi to Gulp !')
})

gulp.task('doThisNext', () => {
  console.log('minifying stuff')
})

gulp.task('doThisLast', () => {
  console.log('Phew !! Finally Done !')
})

gulp.task('default', ['doThisFirst', 'doThisNext'])
