const fs = require("fs");
const path = require("path");

const checkInputs = (input_path, output_path, config_path) => {
  return new Promise((resolve, reject) => {
    try {
      if (config_path) {
        if (!fs.existsSync(path.resolve(config_path))) {
          reject(`${config_path} does not exist.`);
        } else {
          const ext = path.extname(path.resolve(config_path));
          if (ext !== ".json") {
            reject(`${config_path} is not a JSON file.`);
          }
        }
      }
      if (fs.existsSync(input_path)) {
        const ext = path.extname(path.resolve(input_path));
        if (ext === ".js") {
          resolve();
        } else {
          reject(`${input_path} is not a JavaScript file.`);
        }
      } else {
        reject(`${input_path} does not exist.`);
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  checkInputs,
};
