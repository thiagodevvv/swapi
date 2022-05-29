function concatUrl(homeworld, species, starships) {
  return [`${homeworld}`].concat(species).concat(starships);
}

module.exports = concatUrl;
