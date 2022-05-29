const { describe, it } = require("mocha");
const assert = require("assert");
const getUrlsPeoples = require("../../src/functions/getUrlsPeoples.js");
const responseApiGetPlanet = require("../mock/responseApiGetPlanet.js");
const responseApiGetSpecies = require("../mock/responseApiGetSpecies.js");
const responseApiGetStarships = require("../mock/responseApiGetStarships.js");
describe("#Get URL's peoples", () => {
  it("Get residents planet ", async () => {
    const people = "https://swapi.dev/api/people/1/";
    const expected = [
      "https://swapi.dev/api/people/2/",
      "https://swapi.dev/api/people/4/",
      "https://swapi.dev/api/people/6/",
      "https://swapi.dev/api/people/7/",
      "https://swapi.dev/api/people/8/",
      "https://swapi.dev/api/people/9/",
      "https://swapi.dev/api/people/11/",
      "https://swapi.dev/api/people/43/",
      "https://swapi.dev/api/people/62/",
    ];
    const actual = getUrlsPeoples(responseApiGetPlanet, people);
    assert.deepEqual(actual, expected);
  });
  it("Get peoples specie", async () => {
    const people = "https://swapi.dev/api/people/44/";
    const expected = ["https://swapi.dev/api/people/54/"];
    const actual = getUrlsPeoples(responseApiGetSpecies, people);
    assert.deepEqual(actual, expected);
  });
  it("Get pilots starships", async () => {
    const people = "https://swapi.dev/api/people/10/";
    const expected = ["https://swapi.dev/api/people/35/"];
    const actual = getUrlsPeoples(responseApiGetStarships, people);
    assert.deepEqual(actual, expected);
  });
});
