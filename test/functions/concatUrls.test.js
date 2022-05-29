const { describe, it } = require("mocha");
const assert = require("assert");
const concatUrl = require("../../src/functions/concatUrl");

describe("#Concat URL", () => {
  it("Success concat", () => {
    const homeworld = ["https://swapi.dev/api/planets/20/"];
    const starships = [
      "https://swapi.dev/api/starships/48/",
      "https://swapi.dev/api/starships/59/",
      "https://swapi.dev/api/starships/64/",
      "https://swapi.dev/api/starships/65/",
      "https://swapi.dev/api/starships/74/",
    ];
    const species = [];
    const expected = [
      "https://swapi.dev/api/planets/20/",
      "https://swapi.dev/api/starships/48/",
      "https://swapi.dev/api/starships/59/",
      "https://swapi.dev/api/starships/64/",
      "https://swapi.dev/api/starships/65/",
      "https://swapi.dev/api/starships/74/",
    ];
    const actual = concatUrl(homeworld, starships, species);
    assert.deepEqual(actual, expected);
  });
});
