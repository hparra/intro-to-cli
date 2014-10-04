#!/usr/bin/env node

/*
 * more.js --
 *
 * This is a half-functional naive clone of POSIX more. It only supports
 * standard input. Most systems have the more modern 'less' application
 * instead. See `man less`.
 */

// File System
// http://nodejs.org/api/fs.html
var fs = require('fs');

// Start at 2, since we only care about the parameters. See args.js
for (var i = 0; i < process.argv.length; ++i) {
  fs.createReadStream(process.argv[i]).pipe(process.stdout);
}

// always print newline
process.stdout.write('\n');
