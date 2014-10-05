#!/usr/bin/env node

/*
 * nl.js -- line numbering filter
 *
 * This is a optionless naive clone of POSIX nl. It only supports standard input
 * and numbers all lines, including empty ones. See `man nl`.
 */

//
// The primary purpose of this naive nl implementation is to demonstrate how to
// read individual lines from standard input.
//
// The following has been adapted from [Ogden 2012], adding verbose comments and
// trivial line numbering logic.
//
// See https://github.com/substack/stream-handbook
//

var offset     = 0;     // current position in our buffer
var line       = null;  // line string
var lineNumber = 1;     // current line number

// when there is data to be read
process.stdin.on('readable', function() {

  // read data into buffer
  var buf = process.stdin.read();

  // but exit if there is no real data
  if (!buf) return;

  // while we traverse this buffer
  for (; offset < buf.length; offset++) {

    // if we hit a linefeed (LF = 0x0a)
    if (buf[offset] === 0x0a) {

      // then make that portion of buffer into a string
      line = buf.slice(0, offset).toString();

      // and write out our numbered line
      process.stdout.write(lineNumber + '\t' + line + '\n');

      // afterwards replace that buffer with with the remaining portion
      buf = buf.slice(offset + 1);

      // remembering to start from the beginning of the buffer next time
      offset = 0;

      // and incrementing our line count
      lineNumber++;

      // and put that new buffer data back into the stream
      process.stdin.unshift(buf);

      return;
    }
  }

  // if we reached this then there was no linefeed in buffer
  // so we put this data back and start process over with this data
  // and any new data that has come down the pipe
  process.stdin.unshift(buf);
});
