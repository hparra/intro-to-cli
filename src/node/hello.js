#!/usr/bin/env node

/*
 * hello.js -- print 'hello world' to console
 */

//
// You may be more familiar with `console.log`, which is defined as follows:
//
// console.log = function(d) {
//   process.stdout.write(d + '\n');
// };
//
// See http://nodejs.org/api/process.html#process_process_stdout
//

process.stdout.write('hello world' + '\n');
