const glue = require('gluey');

glue.setOption('files', 'test/**/*.test.js');

glue.task('default', ['coverage','fail']);

glue.task('coverage', () => {
  return glue.shell('nyc mocha {{files}}');
});

glue.task('fail', () => {
  return glue.shell('typo');
});
