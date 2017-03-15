const glue = require('gluey');

glue.setOption('files', 'test/**/*.test.js');

glue.task('coverage', () => {
  return glue.shell('nyc mocha {{files}}')
    .then((output)=>{
      console.log(output);
    });
});
