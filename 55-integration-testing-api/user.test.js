const request = require("supertest");
const app = require("./app");
require("./test.setup");

describe("User API Integration", () => {
  it("should create user", async () => {
    const res = await request(app)
      .post("/api/users")
      .send({ name: "Ali", email: "ali@test.com" });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Ali");
  });

  it("should fetch users", async () => {
    await request(app)
      .post("/api/users")
      .send({ name: "Sara", email: "sara@test.com" });

    const res = await request(app).get("/api/users");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });
});