#!/usr/bin/env node

/*
 * signals.js -- read text until EOT
 *
 * This to demonstrates UNIX signal listeners and some general process stuff.
 */

// We can set the name of this process.
// This is useful when looking at monitors like `ps` and `top`.
process.title = 'signals';

// The process identifier (pid) can be useful
// http://en.wikipedia.org/wiki/Process_identifier
process.stdout.write('I\'m process ' + process.pid + '. Listening...\n');

// Start reading from stdin so we don't exit,
// unless there is an end-of-transmission character (EOT),
// which can be sent with Control-D.
process.stdin.resume();

// Control-C sends INT signal (SIGINT).
// By default it causes a program to terminate.
// Listening for this signal is one way of running cleanup code before quiting.
process.on('SIGINT', function () {
  process.stdout.write('` SIGINT. ');
  process.stdout.write('I was told to terminate... but I\'m over it.\n');
  // Normally you would execute the following
  // process.exit()
});

// Killing a program with `kill` sends TERM signal (SIGTERM).
// By default it causes a program to terminate.
// Listening for this signal is one way of running cleanup code before quiting.
process.on('SIGTERM', function () {
  process.stdout.write('Received SIGTERM. ');
  process.stdout.write('Someone tried to kill me... but I\'m tough.\n');
  // Normally you would execute the following
  // process.exit()
});

// Resizing terminal window will send WINCH signal (SIGWINCH).
// Also see `process.stdout.on('resize')`.
process.on('SIGWINCH', function () {
  process.stdout.write('Received SIGWINCH. You\'ve resized the terminal: ');
  process.stdout.write(process.stdout.columns + 'x' + process.stdout.rows + '\n');
});

// Closing your terminal window will send HUP signal (SIGHUP).
// Coincidently, it will also terminate the program.
// Nowaday's daemons have a special use for for this signal.
// See http://en.wikipedia.org/wiki/Unix_signal#POSIX_signals.
process.on('SIGHUP', function () {
  process.stdout.write('Received SIGHUP. Not sure why.\n');
});

// Control-Z sends TSTP signal (SIGTSTP) which suspends the process.
/*
process.on('SIGTSTP', function() {
  process.stdout.write('Received SIGTSTP. Sweet slumber...\n');
  // BUG: I do not know to to propogate this signal properly
})
*/

// Continuing a suspended process send the CONT signal (SIGCONT).
// You can do this by using the `fg` command.
  process.on('SIGCONT', function () {
  process.stdout.write('Received SIGCONT. I\'m alive!\n');
});

//
// You _cannot_ listen to SIGKILL or SIGSTOP events.
// You can learn more about Unix signals from
// http://en.wikipedia.org/wiki/Unix_signal
//

//
// Next:
//
