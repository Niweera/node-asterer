#!/usr/bin/env node

const { getInputs } = require("./getInputs/getInputs");
const { checkInputs } = require("./checkInputs/checkInputs");
const { runAST } = require("./runAST/runAST");
const { saveAST } = require("./saveAST/saveAST");

(async () => {
  try {
    const { input_path, output_path, config_path } = await getInputs();
    await checkInputs(input_path, output_path, config_path);
    const ast_object = await runAST(input_path, config_path);
    await saveAST(output_path, ast_object);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
