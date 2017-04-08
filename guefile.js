const gue = require('gue');

gue.setOption('testFiles', 'test/**/*.test.js');
gue.setOption('watchFiles', [
  'test/**/*.test.js', 'guefile.js', 'package.json',
  'src/**/*.js'
]);

gue.task('default', ['coverage','fail']);

gue.task('coverage', () => {
  return gue.shell('nyc mocha {{testFiles}}');
});

gue.task('fail', () => {
  return gue.shell('typo');
});

gue.watch(gue.options.watchFiles, ['coverage', 'fail']);
