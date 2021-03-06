# CLI Applications with Node.js (Javascript)

## Examples of Node.js CLI tools

- Node
- NPM
- Gulp
- Grunt
- Yeoman
- Bower
- Mocha
- Supervisor
- LESS
- Coffeescript
- Esprima

## Code Examples

Browse the scripts in the following order:

- [hello.js](hello.js)
- [oops.js](oops.js)
- [args.js](args.js)
- [args-minimist.js](args-minimist.js)
- [args-command.js](args-command.js)
- [env.js](env.js)
- [exit-success.js](exit-success.js)
- [exit-failure.js](exit-failure.js)
- [signals.js](signals.js)
- [cat.js](cat.js)
- [echo.js](echo.js)
- [istty.js](istty.js)
- [nl.js](nl.js)
- [nl-split.js](nl-split.js)
- [readline-example.js](readline-example.js)
- [repl.js](repl.js)
- [package.json](package.json)

## Core Node.js modules for CLI Applications

Node.js has quite a few core modules that are useful for CLI applications:

- [Process](http://nodejs.org/api/process.html)
- [Console](http://nodejs.org/api/console.html)
- [Child Process](http://nodejs.org/api/child_process.html)
- [Readline](http://nodejs.org/api/readline.html)
- [REPL](http://nodejs.org/api/repl.html)
- [Stream](http://nodejs.org/api/stream.html)
- [Util](http://nodejs.org/api/util.html)
- [TTY](http://nodejs.org/api/tty.html)

## Packaging You Node.js CLI App

There are some particular fields in [package.json](https://www.npmjs.org/doc/files/package.json.html) that are of interest to CLI developers:

```json
{
  "name" : "my-program",
  "bin" : {
    "my-program" : "./path/to/program"
  },
  "man" : "./man/doc.1",
  "os" : [ "!win32" ]
}
```

- `bin`: path to script that should be available system-wide on install
- `man`: path to man page for help
- `os`: specify operating system(s) support to include or exclude

# Example of calling a Node.js CLI application

- [Sublime Text plugin (python) to jsfmt](https://gist.github.com/hparra/af67e9a39037a3bfdbed)
