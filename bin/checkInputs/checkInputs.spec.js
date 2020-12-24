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
    expect.assertions(1);
    return expect(
      checkInputs(input_path_, output_path_, config_path_)
    ).resolves.toEqual(undefined);
  });

  it("should check the null config path", async () => {
    expect.assertions(1);
    return expect(
      checkInputs(input_path_, output_path_, null)
    ).resolves.toEqual(undefined);
  });

  it("should check the invalid config path", async () => {
    expect.assertions(1);
    await expect(
      checkInputs(input_path_, output_path_, "invalid_config_path")
    ).rejects.toEqual("invalid_config_path does not exist.");
  });

  it("should check a valid config path but the file is not a json", async () => {
    expect.assertions(1);
    await expect(
      checkInputs(input_path_, output_path_, input_path_)
    ).rejects.toEqual(`${input_path_} is not a JSON file.`);
  });

  it("should check invalid input path", async () => {
    expect.assertions(1);
    await expect(
      checkInputs("input_path_", output_path_, config_path_)
    ).rejects.toEqual(`input_path_ does not exist.`);
  });

  it("should check a valid input path but not a JavaScript file", async () => {
    expect.assertions(1);
    await expect(
      checkInputs(config_path_, output_path_, config_path_)
    ).rejects.toEqual(`${config_path_} is not a JavaScript file.`);
  });

  it("should check if the output path already exists", async () => {
    expect.assertions(1);
    await expect(
      checkInputs(input_path_, input_path_, config_path_)
    ).rejects.toEqual(`${input_path_} is already existing.`);
  });
});
