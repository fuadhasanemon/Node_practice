const chalk = require('chalk');

console.log(chalk.blue('This is the code of os module'));

const os = require('os');
//type of os
console.log(os.type());

//os bit
console.log(os.arch());

//about processor
console.log(os.cpus());

//about memory
console.log(os.freemem());