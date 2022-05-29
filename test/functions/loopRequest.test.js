const { describe, it } = require("mocha");
const assert = require("assert");
const loopRequest = require("../../src/functions/loopRequest");

describe("#Loop Request URLS Relations", () => {
  it("Error, required Array of URLS", () => {
    assert.rejects(() => loopRequest(), {
      message: "Error, required array of urls",
    });
  });
  it("Success return array of character urls related to Han Solo", async () => {
    //Han Solo
    const peopleUrl = "https://swapi.dev/api/people/14/";
    const urlsFindRelation = [
      "https://swapi.dev/api/planets/22/",
      "https://swapi.dev/api/starships/10/",
      "https://swapi.dev/api/starships/22/",
    ];
    const expected = [
      "https://swapi.dev/api/people/18/",
      "https://swapi.dev/api/people/13/",
      "https://swapi.dev/api/people/25/",
    ];
    const actual = await loopRequest(urlsFindRelation, peopleUrl);
    assert.deepEqual(actual, expected);
  });
  it("Success return array of character urls related to Darth Vader", async () => {
    //Darth vader
    const peopleUrl = "https://swapi.dev/api/people/4/";
    const urlsFindRelation = [
      "https://swapi.dev/api/planets/1/",
      "https://swapi.dev/api/starships/13/",
    ];
    const expected = [
      "https://swapi.dev/api/people/1/",
      "https://swapi.dev/api/people/2/",
      "https://swapi.dev/api/people/6/",
    ];
    const actual = await loopRequest(urlsFindRelation, peopleUrl);
    assert.deepEqual(actual, expected);
  });
});
