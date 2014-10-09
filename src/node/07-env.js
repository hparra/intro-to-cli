#!/usr/bin/env node

/*
 * env.js -- print environment
 *
 * This is a no args, read-only naive clone of POSIX env. See `man env`.
 */

//
// `process.env` is an object that contains environment information
// See  http://nodejs.org/api/process.html#process_process_env
//

for (key in process.env) {
  process.stdout.write(key + '=' + process.env[key] + '\n');
}
