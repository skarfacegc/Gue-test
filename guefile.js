const gue = require('gue');

gue.setOption('testFiles', 'test/**/*.test.js');

gue.task('default', ['coverage','fail']);

gue.task('coverage', () => {
  return gue.shell('nyc mocha {{testFiles}}');
});

gue.task('fail', () => {
  return gue.shell('typo');
});
