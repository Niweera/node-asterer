# Node-ASTerer

Node-ASTerer is a CLI tool to generate an [AST](https://www.digitalocean.com/community/tutorials/js-traversing-ast#:~:text=An%20AST%20is%20the%20result,can%20choose%20the%20acorn%20parser.) of a given JavaScript file and it will save it as *.JSON.

Node-ASTerer uses [AcornJS](https://github.com/acornjs/acorn) under the hood to generate the AST.

## Usage

```bash
$ npm install -g @niweera/node-asterer
$ node-asterer -i /path/to/javascript/file.js -o /output/path/of/file.json
```
