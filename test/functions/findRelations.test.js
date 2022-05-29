const { describe, it } = require("mocha");
const assert = require("assert");
const findRelation = require("../../src/functions/findRelation.js");
const MOCK = require("../mock/mockPeople.js");
const mockDarthVader = require("../mock/mockDarthVader");
describe("#Find relationships", () => {
  it("Error, required param people", async () => {
    assert.rejects(() => findRelation(), {
      message: "Data of people is required",
    });
  });
  it("Success with cache", async () => {
    const expected = [
      "https://swapi.dev/api/people/58/",
      "https://swapi.dev/api/people/11/",
      "https://swapi.dev/api/people/35/",
    ];
    const actual = await findRelation(MOCK);
    assert.deepEqual(actual, expected);
  });
  it("Success without cache", async () => {
    const expected = [
      "https://swapi.dev/api/people/1/",
      "https://swapi.dev/api/people/2/",
      "https://swapi.dev/api/people/6/",
    ];
    const actual = await findRelation(mockDarthVader);
    assert.deepEqual(actual, expected);
  });
});
