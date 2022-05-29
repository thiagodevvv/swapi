const { describe, it } = require("mocha");
const assert = require("assert");
const statusFullFilled = require("../mock/statusFullFilled");
const MOCK = require("../mock/mockResponseSearchPeople");
const setResponse = require("../../src/functions/setResponse");
describe("#setResponse", () => {
  it("Success", () => {
    const expected = {
      peoples: [
        {
          name: "Obi-Wan Kenobi",
          height: "182",
          mass: "77",
          hair_color: "auburn, white",
          skin_color: "fair",
          eye_color: "blue-gray",
          birth_year: "57BBY",
          gender: "male",
          homeworld: "https://swapi.dev/api/planets/20/",
          films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          species: [],
          vehicles: ["https://swapi.dev/api/vehicles/38/"],
          starships: [
            "https://swapi.dev/api/starships/48/",
            "https://swapi.dev/api/starships/59/",
            "https://swapi.dev/api/starships/64/",
            "https://swapi.dev/api/starships/65/",
            "https://swapi.dev/api/starships/74/",
          ],
          created: "2014-12-10T16:16:29.192000Z",
          edited: "2014-12-20T21:17:50.325000Z",
          url: "https://swapi.dev/api/people/10/",
        },
      ],
      relationships: [
        {
          name: "Plo Koon",
          height: "188",
          mass: "80",
          hair_color: "none",
          skin_color: "orange",
          eye_color: "black",
          birth_year: "22BBY",
          gender: "male",
          homeworld: "https://swapi.dev/api/planets/49/",
          films: [
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          species: ["https://swapi.dev/api/species/26/"],
          vehicles: [],
          starships: ["https://swapi.dev/api/starships/48/"],
          created: "2014-12-20T10:49:19.859000Z",
          edited: "2014-12-20T21:17:50.439000Z",
          url: "https://swapi.dev/api/people/58/",
        },
        {
          name: "Anakin Skywalker",
          height: "188",
          mass: "84",
          hair_color: "blond",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "41.9BBY",
          gender: "male",
          homeworld: "https://swapi.dev/api/planets/1/",
          films: [
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          species: [],
          vehicles: [
            "https://swapi.dev/api/vehicles/44/",
            "https://swapi.dev/api/vehicles/46/",
          ],
          starships: [
            "https://swapi.dev/api/starships/39/",
            "https://swapi.dev/api/starships/59/",
            "https://swapi.dev/api/starships/65/",
          ],
          created: "2014-12-10T16:20:44.310000Z",
          edited: "2014-12-20T21:17:50.327000Z",
          url: "https://swapi.dev/api/people/11/",
        },
        {
          name: "Padmé Amidala",
          height: "185",
          mass: "45",
          hair_color: "brown",
          skin_color: "light",
          eye_color: "brown",
          birth_year: "46BBY",
          gender: "female",
          homeworld: "https://swapi.dev/api/planets/8/",
          films: [
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/",
          ],
          species: [],
          vehicles: [],
          starships: [
            "https://swapi.dev/api/starships/39/",
            "https://swapi.dev/api/starships/49/",
            "https://swapi.dev/api/starships/64/",
          ],
          created: "2014-12-19T17:28:26.926000Z",
          edited: "2014-12-20T21:17:50.381000Z",
          url: "https://swapi.dev/api/people/35/",
        },
      ],
    };
    const actual = setResponse(MOCK, statusFullFilled);
    assert.deepEqual(actual, expected);
  });
  it("Error required params peoples and relations", () => {
    assert.rejects(() => setResponse(), {
      message: "Error required params peoples, relations",
    });
  });
});
