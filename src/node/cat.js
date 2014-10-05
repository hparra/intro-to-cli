#!/usr/bin/env node

/*
 * cat.js -- concatenate and print files
 *
 * This is a half-functional naive clone of POSIX cat. It does not support
 * standard input. See `man cat`.
 */

// File System
// http://nodejs.org/api/fs.html
var fs = require('fs');

// start at third argument, since we only care about the command parameters
// so for each command parameter
for (var i = 2; i < process.argv.length; ++i) {

  // read the file contents and pipe them to standard out
  fs.createReadStream(process.argv[i]).pipe(process.stdout);
}

// and always print newline
process.stdout.write('\n');
