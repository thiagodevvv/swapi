const axios = require("axios");
const getCache = require("./getCache.js");
const setCache = require("./setCache.js");
const getUrlsPeoples = require("./getUrlsPeoples.js");
const expireTime = 60 * 15; // 15 minutos
function loopRequest(urlsFindRelation, peopleUrl) {
  return new Promise(async (resolve, reject) => {
    if (!urlsFindRelation) throw new Error("Error, required array of urls");
    const urlsPeoplesRelation = [];
    for (let i = 0; i < urlsFindRelation.length; i++) {
      const cached = await getCache(urlsFindRelation[i]);
      if (cached) {
        const urlPeoples = getUrlsPeoples(cached, peopleUrl);
        if (urlPeoples.length > 0) urlsPeoplesRelation.push(...urlPeoples);
        if (urlsPeoplesRelation.length >= 3) {
          break;
        }
      } else {
        //urlsFindRelation é um array com as urls de planets, espécies e naves espacias do primeiro personagem que retorna da pesquisa
        const { data: response } = await axios.get(urlsFindRelation[i]);
        setCache(urlsFindRelation[i], response, expireTime);
        // getUrlsPeoples busca outros personagens relacionados com base no retorno do planeta de nascimento/especie/nave espacial do personagem buscado.
        const urlPeoples = getUrlsPeoples(response, peopleUrl);
        if (urlPeoples.length > 0) urlsPeoplesRelation.push(...urlPeoples);
        //se urlsPeoplesRelation for maior ou igual a 3 paramos o loop pois atingimos o requisito de 3 personagens relacionados
        if (urlsPeoplesRelation.length >= 3) {
          break;
        }
      }
    }
    resolve(urlsPeoplesRelation.slice(0, 3));
  });
}

module.exports = loopRequest;
