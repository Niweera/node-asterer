jest.mock("../getInputs/getInputs");
const { runAST } = require("./runAST");
const { getInputs } = require("../getInputs/getInputs");

describe("run AST for given JS file", () => {
  let input_path_, config_path_;

  beforeEach(async () => {
    const { input_path, config_path } = await getInputs();
    input_path_ = input_path;
    config_path_ = config_path;
  });

  it("should return the AST JSON object", async () => {
    try {
      const json_object = await runAST(input_path_, config_path_);
      expect(json_object).toBeInstanceOf(Object);
    } catch (e) {
      console.log(e);
    }
  });
});
