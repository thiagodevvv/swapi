const axios = require("axios");
const getCache = require("./getCache.js");
const setCache = require("./setCache.js");
const timeExpire = 60 * 15;
function Request(url) {
  return new Promise(async (resolve, reject) => {
    try {
      if (!url) throw new Error("Error required URL param");
      const cached = await getCache(`${url}`);
      if (cached) resolve(cached);
      const { data: response } = await axios.get(`${url}`);
      setCache(`${url}`, response, timeExpire);
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = Request;
