[![npm version](https://badge.fury.io/js/%40niweera%2Fnode-asterer.svg)](https://badge.fury.io/js/%40niweera%2Fnode-asterer)
[![NPM Downloads](https://img.shields.io/npm/dt/@niweera/node-asterer)](https://www.npmjs.com/package/@niweera/node-asterer)

# Node-ASTerer

Node-ASTerer is a CLI tool to generate the [AST](https://www.digitalocean.com/community/tutorials/js-traversing-ast) of a given JavaScript file and it will save it as *.json file.

Node-ASTerer uses [AcornJS](https://github.com/acornjs/acorn) under the hood to generate the AST.

## Usage

```bash
$ npm install -g @niweera/node-asterer
$ node-asterer -i /path/to/javascript/file.js -o /output/path/of/file.json
```
