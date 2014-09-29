# Introduction to the CLI with Node.js

Hector G. Parra

The command-line interface, or CLI, is where modern programming tools were born and where they continue to live. Understanding the CLI allows us to use its tools properly and to create new tools with maximum reusability. We explore the Bash (Bourne Again) shell to learn CLI fundamentals, and use Node.js for examples on how we can create new tools.

## Examples of Node.js CLI tools

- Node
- NPM
- Grunt
- Gulp
- Yeoman
- Bower
- Mocha
- Supervisor
- LESS
- Coffeescript
- Esprima

## Example of a Problem

Recently I was given the task of updating an older Ember.js project so that it was compatible with the Ember CLI tool.

By default, the tool always runs JSHint as the first part of most tasks. I immediately received tons of errors like the following:

`app/js/some-file.js: line 266, col 13, 'Ember' is not defined.`

I got this error hundreds of times. Those references to Ember could be across a dozen files or even a hundred. I was not going to manually add the necessary `import Ember from 'ember';` to the top of each file. Luckily, the CLI and its tools can do the work for me:

```shell
jshint app/js/ |
grep "'Ember' is not defined" |
sed -e "s=^\(app/js/.*.js\).*$=\1=" |
uniq |
xargs sed -i "1iimport Ember from 'ember';"
```

An explanation:

`jshint app/js/`: I call JSHint to get a list of all javascript errors.

`grep "'Ember' is not defined"`: I pipe the list of errors to `grep` so that it only outputs lines with the desired string. I now have a list of "'Ember' is not defined" errors.

`sed -e "s=\^(app/js/.*.js\).*$=\1="`: I pipe the list of Ember errors to `sed` and use a regular expression to parse the filepath at the beginning of each line and replace that entire line with that filepath. I now have a list of filepaths.

`uniq`: I pipe the list of filepaths to `uniq` to remove any duplicates. I now have a list of unique filepaths.

`xargs sed -i "1iimport Ember from 'ember';"`: I pipe the list of filepaths to `xargs` which calls `sed` for each filepath and adds "import Ember from 'ember';" to the first line of that file, updating the file in-place. All the files that needed that line now have it.

_Note: Adapted from [import_ember.sh](https://gist.github.com/hparra/9c4de5fcc0073c628376)_

_Note: For the record, there were 268 references across 147 files._

_Note: Mac OS X has BSD sed installed by default. GNU sed is necessary for in-place editing used here. It can be installed using homebrew `brew install gnu-sed`._

_Note: `sed` is more than capable of doing all of its own work and `grep`'s' in a single step, but I feel the resulting code is not as clear or intuitive. It may, however, be peform better._

## Unix Philosophy

> We should have some ways of coupling programs like garden hose--screw in another segment [when it becomes] necessary to massage data in another way. This is the way of IO also. -- Doug McIlroy

> | -- Ken Thompson

_Note: The `|` was not the first iteration of pipes within the UNIX OS. See [Ritchie 1979]._

## CLI Standards

TODO

## Redirecting Standard I/O (Bash)

Send stdout to file: `prog > file`
Send stderr to file: `prog 2> file`
Send stdout and stderr to file: `prog > file 2>&1`
Take stdin from file: `prog < file`
Send stdout to end of file: `prog >> file`
Send stderr to end of file: `prog 2>> file`
Send stdout and stderr to end of file `prog >> file 2>&1`
Read stdin from keyboard until c `prog <<c`
Pipe stdout to prog2: `prog | prog2`
Pipe stdout and stderr to prog2: `prog 2>&1 | prog2`

_Adapated from [Loukides 2000]_

## Using pipes from within Applications

TODO

Example of python calling a Node app: https://gist.github.com/hparra/af67e9a39037a3bfdbed



