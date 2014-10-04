#!/usr/bin/env node

/*
 * echo.js -- write arguments to the standard output
 *
 * This is a naive clone of POSIX echo. See `man echo`.
 */

// Start at 2, since we only care about the parameters. See args.js
for (var i = 2; i < process.argv.length; ++i) {
  process.stdout.write(process.argv[i] + ' ');
}

// always print newline, just like real 'echo'
process.stdout.write('\n');
