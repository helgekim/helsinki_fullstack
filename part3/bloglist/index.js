console.log(
	"Application in development"
);


const config = require('./config.js');
const application = require('./app.js');

// console.log(application)

application.listen(config.PORT, () => console.log(`Up and running: ${config.PORT}`)) // move configuration to special file 

