const axios = require("axios");
const findRelation = require("../functions/findRelation.js");
const getCache = require("../functions/getCache.js");
const setCache = require("../functions/setCache.js");
const request = require("../functions/request.js");
const setResponse = require("../functions/setResponse.js");
const expireTime = 60 * 15; // 15min
async function people(req, res) {
  try {
    if (!req.query.name)
      return res.status(400).send({ Msg: "Required param name" });
    const cache = await getCache(req.query.name);
    if (cache) return res.status(200).send(cache);
    const { data: peoples } = await axios.get(
      `https://swapi.dev/api/people/?search=${req.query.name}`
    );
    if (peoples.count == 0) {
      setCache(req.query.name, { Msg: "Not found peoples" }, expireTime);
      return res.status(404).send({ Msg: "Not found peoples" });
    }
    const relations = await findRelation(peoples.results[0]); // pega o primeiro de base para buscar outros personagens relacionados.
    const promises = await Promise.allSettled([
      request(relations[0]),
      request(relations[1]),
      request(relations[2]),
    ]);
    const statusFullFilled = promises.filter(
      (promise) => promise.status === "fulfilled"
    );
    const response = setResponse(peoples, statusFullFilled);
    setCache(req.query.name, response, expireTime);
    return res.status(200).send(response);
  } catch (err) {
    return res.status(500).send("Error");
  }
}

module.exports = people;
