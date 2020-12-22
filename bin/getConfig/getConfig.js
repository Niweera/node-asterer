const fs = require("fs");
const path = require("path");

const local_config_path = path.join(__dirname, "./config.json");

const getJSON = (json_path) => {
  return new Promise((resolve, reject) => {
    try {
      if (fs.existsSync(path.resolve(json_path))) {
        const config_raw = fs.readFileSync(json_path).toString();
        resolve(JSON.parse(config_raw));
      } else {
        reject(`${json_path} does not exist.`);
      }
    } catch (e) {
      reject(e);
    }
  });
};

/**
 * @param config_path
 * @returns {Promise<acorn.Options>}
 */
const getConfig = (config_path) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (config_path) {
        const config = await getJSON(config_path);
        resolve(config);
      } else {
        const config = await getJSON(local_config_path);
        resolve(config);
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getConfig,
  getJSON,
};
