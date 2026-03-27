const axios = require("axios");
jest.mock("axios");

const { getUserData } = require("./56-mocking");

describe("Mocking APIs and DB", () => {
  it("should return merged user data", async () => {
    axios.get.mockResolvedValue({
      data: { id: 1, name: "Mock User" }
    });

    const result = await getUserData(1);

    expect(result).toEqual({
      id: 1,
      name: "Mock User",
      role: "user"
    });
  });
});