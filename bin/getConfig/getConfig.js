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
const getConfig = async (config_path) => {
  if (config_path) {
    return await getJSON(config_path);
  } else {
    return await getJSON(local_config_path);
  }
};

module.exports = {
  getConfig,
  getJSON,
};
