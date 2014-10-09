#!/usr/bin/env node

/*
 * istty.js -- write message depending if TTY
 */

//
// `isTTY` (is Teleprinter) will tell you if you're writing to a console.
// See http://en.wikipedia.org/wiki/Teleprinter for historical context.
//

//
// Test this script by executing it differently:
//
// - `./istty.js`
// - `./istty.js | cat`
// - `./istty.js > output.txt` and read generated text file
//

if (process.stdout.isTTY) {
  process.stdout.write('I\'m writing to console.\n');
} else {
  process.stdout.write('I\'m probably writing to a file or pipe.\n');
}

//
// Checking for the TTY (console) is a great way to change to a more interactive
// mode should your application decide to have one.
//

//
// Next:
//
