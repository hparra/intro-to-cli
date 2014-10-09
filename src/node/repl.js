#!/usr/bin/env node

/*
 * repl.js -- example program using REPL
 */

//
// You can access Node's Read-Eval-Print-Loop (REPL) when you run 'node' without
// any arguments.
//
// For a list of special commands type `.help`
//
// You can create your own REPLs too.
//

// http://nodejs.org/api/repl.html
var repl = require("repl");

var replServer = repl.start({
  prompt: "LOL> ",
  input: process.stdin,
  output: process.stdout
});

//
// You can assign your own objects and functions to the context of your REPL, so
// you can access them as you please. In real applications these could include:
//
// - your own math library
// - ORM models from web application server
// - anything else you want!
//

// context is the local namespace for every REPL.
// Here we are adding a silly function for demonstration.
replServer.context.lolz = function (num) {
  var str = '';
  for (var i = 0; i < num; i++) {
    str += 'lo';
  }
  if (num > 0) {
    str += 'l';
  }
  return str;
}

//
// In your REPL, you will be able to call the previous function.
//
// Try:
//
//  lolz(10);
//
