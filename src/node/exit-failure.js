#!/usr/bin/env node

/*
 * exit-failure.js -- exits with error
 */

// Any value other than 0 represents an eixt with failure.
// See http://en.wikipedia.org/wiki/Exit_status for more information
process.exit(1);

//
// The shell recognizes an error code as 'false'.
// This allows you to combine statements where each subsequent command only runs
// if the previous one exited successfully.
//
// Example:
//
//   ./exit-failure.js && echo 'Success!'   # Does not print out 'Success!'
//
