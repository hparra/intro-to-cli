#!/usr/bin/env node

/*
 * oops.js -- print 'oops' as error
 */

// `process.stdout` is also Writable Stream
// http://nodejs.org/api/stream.html#stream_class_stream_writable
process.stderr.write('oops\n');

// Similarly the following write to `process.stderr`
console.error('sorry');
console.warn('my bad');
