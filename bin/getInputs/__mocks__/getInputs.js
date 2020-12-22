const path = require("path");

const getInputs = async () => ({
  input_path: path.join(__dirname, "example.js"),
  output_path: path.join(
    path.resolve(__dirname, "../.."),
    "saveAST",
    "__mocks__",
    "sample.json"
  ),
  config_path: path.join(__dirname, "sample_config.json"),
});

module.exports = {
  getInputs,
};
