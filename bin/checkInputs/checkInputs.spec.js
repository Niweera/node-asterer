const fs = require("fs");
const { checkInputs } = require("./checkInputs");
const { getInputs } = require("../getInputs/getInputs");
jest.mock("../getInputs/getInputs");

describe("check inputs [input_path, output_path, config_path]", () => {
  let input_path_, output_path_, config_path_;

  beforeEach(async () => {
    const { input_path, output_path, config_path } = await getInputs();
    input_path_ = input_path;
    output_path_ = output_path;
    config_path_ = config_path;

    if (fs.existsSync(output_path_)) {
      fs.unlinkSync(output_path_);
    }
  });

  it("should check the input path, the output path and the config path", async () => {
    try {
      await checkInputs(input_path_, output_path_, config_path_);
    } catch (e) {
      console.log(e);
    }
  });
});
