#!/usr/bin/env node

/*
 * args-commander.js -- write all script arguments to standard output
 */

//
// If you're looking for something more complete, that also handles things like
// creating a default help menu, the try TJ Holowaychuck's
// [commander](https://github.com/visionmedia/commander.js)
//
// The proceeding is copied directly from that projects's README.md.
//

// npm install commander
var program = require('commander');

// specify your argument defaults and other information about application
program
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbq) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);

//
// Next: args-commander.js
//
