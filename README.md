Ruthenium Workspace CLI
=================

oclif example Hello World CLI

[![ruthenium](https://img.shields.io/badge/cli-ruthenium-brightgreen.svg)](https://github.com/rizentium/ruthenium)
[![Version](https://img.shields.io/npm/v/ruthenium.svg)](https://npmjs.org/package/ruthenium)
[![Downloads/week](https://img.shields.io/npm/dw/ruthenium.svg)](https://npmjs.org/package/ruthenium)
[![License](https://img.shields.io/npm/l/ruthenium.svg)](https://github.com/rizentium/ruthenium/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ruthenium
$ ruthenium COMMAND
running command...
$ ruthenium (--version)
ruthenium/0.0.1 win32-x64 node-v18.14.1
$ ruthenium --help [COMMAND]
USAGE
  $ ruthenium COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g oclif-hello-world
$ oex COMMAND
running command...
$ oex (--version)
oclif-hello-world/0.0.0 darwin-x64 node-v16.13.1
$ oex --help [COMMAND]
USAGE
  $ oex COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ruthenium bootstrap`](#ruthenium-bootstrap)
* [`ruthenium help [COMMANDS]`](#ruthenium-help-commands)

## `ruthenium bootstrap`

Initializes the workspace packages

```
USAGE
  $ ruthenium bootstrap

DESCRIPTION
  Initializes the workspace packages

EXAMPLES
  $ ruthenium bootstrap
```

_See code: [dist/commands/bootstrap/index.ts](https://github.com/rizentium/ruthenium/blob/v0.0.1/dist/commands/bootstrap/index.ts)_

## `ruthenium help [COMMANDS]`

Display help for ruthenium.

```
USAGE
  $ ruthenium help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ruthenium.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.5/src/commands/help.ts)_
