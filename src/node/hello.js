#!/usr/bin/env node

/*
 * hello.js -- print 'hello world' to console
 */

// `process.stdout` is a Writable Stream
// http://nodejs.org/api/stream.html#stream_class_stream_writable
process.stdout.write('hello, ');

// You may be familiar with `console.log` which writes to `process.stdout`
// with a newline ('\n')
// http://nodejs.org/api/process.html#process_process_stdout
console.log('world');

// `console.info` does the same
console.info('hello, world?');

// Just remember that console.log adds printf-like functionality too
// http://en.wikipedia.org/wiki/Printf_format_string
console.log('I\'ve said "hello, world" %d times now', 3);

//
// Next: 2-oops.js
//
