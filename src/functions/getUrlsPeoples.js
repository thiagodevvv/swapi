function getUrlsPeoples(response, characterUrl) {
  if (response.url.includes("planets")) {
    const residents = response.residents.filter(
      (resident) => resident !== characterUrl
    );
    return residents;
  }
  if (response.url.includes("species")) {
    const species = response.people.filter((specie) => specie !== characterUrl);
    return species;
  }
  if (response.url.includes("starships")) {
    const starships = response.pilots.filter((pilot) => pilot !== characterUrl);
    return starships;
  }
}

module.exports = getUrlsPeoples;
