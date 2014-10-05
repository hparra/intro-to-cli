# Node.js

Browse the scripts in the following order:

- hello.js
- args.js
- echo.js
- cat.js
- nl.js

Instead of using `console.log` helper to print to standard out, we will always use the long form `process.stdout.write()`.

## Node.js modules for CLI Applications

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

- `bin`: path to script
- `man`: path to man page
- `os`: specify operating system(s)