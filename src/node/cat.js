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

// Start at 2, since we only care about the parameters. See args.js
for (var i = 2; i < process.argv.length; ++i) {
  fs.createReadStream(process.argv[i]).pipe(process.stdout);
}

// always print newline
process.stdout.write('\n');
