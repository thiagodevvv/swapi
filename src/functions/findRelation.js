const concatUrl = require("./concatUrl");
const loopRequest = require("./loopRequest");
function findRelation(people) {
  return new Promise(async (resolve, reject) => {
    if (!people) throw new Error("Data of people is required");
    try {
      const urlsFindRelation = concatUrl(
        people.homeworld,
        people.species,
        people.starships
      );
      const urlsPeoplesRelation = await loopRequest(
        urlsFindRelation,
        people.url
      );
      resolve(urlsPeoplesRelation.slice(0, 3));
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = findRelation;
