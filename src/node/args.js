#!/usr/bin/env node

/*
 * args.js -- write all script arguments to standard output
 */

//
// `process.argv` is an array holding each argument:
//
// - First value is always the executable, 'node'
// - Second value is always the absolute path of the script
// - Subsequent values are parameters that were passed in
//
// See http://nodejs.org/api/process.html#process_process_argv
//

// We're using `Array.forEach` for convenience
process.argv.forEach(function (val, index, array) {
  process.stdout.write(val + '\n');
});
