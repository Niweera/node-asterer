const { Parser } = require("acorn");
const { getConfig } = require("../getConfig/getConfig");
const fs = require("fs");

const runAST = (input_path, config_path) => {
  return new Promise(async (resolve, reject) => {
    try {
      const input_file_string = fs.readFileSync(input_path).toString();
      const config = await getConfig(config_path);

      const ast_object = Parser.parse(input_file_string, config);

      resolve(ast_object);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  runAST,
};
