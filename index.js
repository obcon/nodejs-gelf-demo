const Logger = require('bunyan');
var log = new Logger({name: 'nodejs-gelf-demo'});
setInterval(function() {
	log.info("random %s", Math.round(Math.random() * 10000000));
    },3000);
