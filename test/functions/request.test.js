const { describe, it } = require("mocha");
const assert = require("assert");
const request = require("../../src/functions/request");
const mockPeople = require("../mock/mockPeople");
describe("#Test function request", () => {
  it("Required param URL", async () => {
    assert.rejects(() => request(), {
      message: "Error required URL param",
    });
  });
  it("Succes request without cached", async () => {
    const url = "https://swapi.dev/api/people/10/";
    const expected = mockPeople;
    const actual = await request(url);
    assert.deepEqual(actual, expected);
  });
  it("Succes request with cached", async () => {
    const url = "https://swapi.dev/api/people/10/";
    const expected = mockPeople;
    const actual = await request(url);
    assert.deepEqual(actual, expected);
  });
});
