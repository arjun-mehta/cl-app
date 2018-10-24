const program = require('commander');

program
  .version('1.0.0')
  .option('-M, --coordinate','required user input')
  .parse(process.argv)
  .action(function(req, optional){
    console.log('Your move has been placed. Next player\'s turn!');
    if (optional) {
      optional.forEach(function(opt){
        console.log("Coordinates", opt);
      });
    }
  });