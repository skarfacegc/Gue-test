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
  return gue.shell('node -e \'console.error("This is stderr")\' && exit 1');
});

gue.task('watch', ()=> {
  gue.watch(gue.options.watchFiles, ['coverage', 'fail']);
});

// This is used by the gue integration test to generate the snapshot we
// compare against
gue.task('snapshotTest', ['mochaJson','fail']);
gue.task('mochaJson', () => {
  return gue.shell('mocha -R tap {{testFiles}}');
});
