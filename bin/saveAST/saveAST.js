const fs = require("fs");

const saveAST = (output_path, ast_object) => {
  return new Promise((resolve, reject) => {
    try {
      fs.writeFileSync(output_path, JSON.stringify(ast_object, null, 4));
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  saveAST,
};
