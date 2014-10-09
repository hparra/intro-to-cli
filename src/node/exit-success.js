#!/usr/bin/env node

/*
 * exit-success.js -- exits successfully
 */

// The default value is 0 which is a successful exit, i.e. there were no errors
// See http://en.wikipedia.org/wiki/Exit_status for more information
process.exit();

//
// The shell recognizes a successful error code as 'true'.
// This allows you to combine statements where each subsequent command only runs
// if the previous one exited successfully.
//
// Example:
//
//   ./exit-success.js && echo 'Success!'   # Prints out 'Success!'
//

//
// Next: exit-failure.js
//
