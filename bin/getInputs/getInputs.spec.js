const path = require("path");
const { getInputs } = require("./getInputs");
jest.mock("./getInputs");

describe("get inputs [input_path, output_path, config_path]", () => {
  it("should return the input path, the output path and the config path", async () => {
    const { input_path, output_path, config_path } = await getInputs();
    expect(input_path).toBe(path.join(__dirname, "__mocks__/example.js"));
    expect(output_path).toBe(
      path.join(
        path.resolve(__dirname, ".."),
        "saveAST",
        "__mocks__",
        "sample.json"
      )
    );
    expect(config_path).toBe(
      path.join(__dirname, "__mocks__/sample_config.json")
    );
  });
});
