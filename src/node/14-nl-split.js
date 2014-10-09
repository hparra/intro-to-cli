#!/usr/bin/env node

/*
 * nl.js -- line numbering filter
 *
 * This is a optionless naive clone of POSIX nl. It only supports standard input
 * and numbers all lines, including empty ones. See `man nl`.
 */

//
// The preceeding was a general algorithm for data buffering which can be
// applied to data of any byte size, delimited by any character. However,
// since most stream data is text-based and linefeed delimited it is recommended
// that you do not repeat yourself (DRY). See Dominic Tarr's
// [split](https://www.npmjs.org/package/split) for a far more succint way of
// accomplishing this task:
//

var split = require('split');
var lineNumber = 1;

process.stdin
  .pipe(split())
  .on('data', function (line) {
    process.stdout.write(lineNumber + '\t' + line + '\n');
    lineNumber++;
  })

//
// You could also read entire file as a buffer.
// See Max Ogden's [concat-stream](https://github.com/maxogden/concat-stream)
//
