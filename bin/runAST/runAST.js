const { Parser } = require("acorn");
const { getConfig } = require("../getConfig/getConfig");
const fs = require("fs");

const runAST = async (input_path, config_path) => {
  const input_file_string = fs.readFileSync(input_path).toString();
  const config = await getConfig(config_path);
  return Parser.parse(input_file_string, config);
};

module.exports = {
  runAST,
};
