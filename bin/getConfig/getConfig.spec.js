const { getConfig, getJSON } = require("./getConfig");
const { getInputs } = require("../getInputs/getInputs");
jest.mock("../getInputs/getInputs");

describe("get config object", () => {
  let config_path_;

  beforeEach(async () => {
    const { config_path } = await getInputs();
    config_path_ = config_path;
  });

  it("should get the config object", async () => {
    try {
      jest.unmock("./getConfig");
      const json_object = await getJSON(config_path_);
      const local_json_object = await getConfig(null);
      expect(json_object).toStrictEqual({ ecmaVersion: 2019, locations: true });
      expect(local_json_object).toStrictEqual({
        ecmaVersion: 2020,
        locations: true,
      });
    } catch (e) {
      console.log(e);
    }
  });

  it("should check if the output path already exists", async () => {
    expect.assertions(1);
    await expect(getJSON("config_path_")).rejects.toEqual(
      `config_path_ does not exist.`
    );
  });
});
