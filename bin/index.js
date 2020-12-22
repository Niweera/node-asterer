#!/usr/bin/env node

const yargs = require("yargs");
const { Parser } = require("acorn");
const fs = require("fs");

const options = yargs
  .usage("Usage: -i <input-file> -o <output-file>")
  .option("i", {
    alias: "in",
    describe: "Source JavaScript file to be AST parsed",
    type: "string",
    demandOption: true,
  })
  .option("o", {
    alias: "out",
    describe: "Output file path for AST parsed JSON file",
    type: "string",
    demandOption: true,
  }).argv;

input_path = options.in;
output_path = options.out;

if (input_path === "" || output_path === "") {
  console.log("input path or output path is missing");
  process.exit(1);
}

if (!fs.existsSync(input_path)) {
  console.log("input file path does not exist");
  process.exit(1);
}

try {
  const ast_object = Parser.parse(fs.readFileSync(input_path).toString(), {
    ecmaVersion: 2020,
    locations: true,
  });

  fs.writeFileSync(output_path, JSON.stringify(ast_object, null, 4));
} catch (err) {
  console.log(err);
}
