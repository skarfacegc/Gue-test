const glue = require('gluey');

glue.setOption('files', 'test/**/*.test.js');

glue.task('coverage', () => {
  glue.shell('nyc mocha {{files}}')
  .then((data) => {
    console.log(data);
  })
  .catch((err)=>{
    console.log('ERROR ' + err);
  });
});
