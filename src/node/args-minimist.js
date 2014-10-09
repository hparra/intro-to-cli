#!/usr/bin/env node

/*
 * args.minimist.js -- write all script arguments to standard output
 */

//
// Parsing complex arguments sets from process.argv can get tedious quickly.
//
// Instead, try using James Halliday's
// [minimist](https://github.com/substack/minimist)
//

// npm install minimist
var minimist = require('minimist');

// minimist accepts an argv array and returns an object
var argv = minimist(process.argv.slice(2));

// `console.dir` is a special log that expands and prints objects
console.dir(argv);

//
// Next: args-commander.js
//
