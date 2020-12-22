const yargs = require("yargs");

const getInputs = () => {
  return new Promise((resolve, reject) => {
    try {
      /**
       *@property in
       *@property out
       *@property config
       */
      const options = yargs
        .usage(
          "Usage: node-asterer -i <input-file> -o <output-file> [-c <config-file>]"
        )
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
        })
        .option("c", {
          alias: "config",
          describe: "Config file path",
          type: "string",
          demandOption: false,
        }).argv;

      if (options.in === "" || options.out === "") {
        reject("input path or output path is missing");
      }

      resolve({
        input_path: options.in,
        output_path: options.out,
        config_path: options.config,
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getInputs,
};
