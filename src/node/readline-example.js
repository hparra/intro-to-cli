#!/usr/bin/env node

/*
 * readline-example.js -- example program using readline
 */

//
// Adapted from readline example
// http://nodejs.org/api/readline.html
//

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,

  // (Optional) Enable tab completion!
  completer: function (line) {
    var completions = [
      'It sucks!',
      'It is awesome!',
      'What is node.js?'
    ];

    var hits = completions.filter(function(c) {
      return c.indexOf(line) == 0
    });

    // show all completions if none found
    return [hits.length ? hits : completions, line]
  }
});

rl.question("What do you think of node.js? ", function (answer) {

  // TODO: Log the answer in a database

  console.log("Thank you for your valuable feedback:", answer);

  rl.close();
});
