function setResponse(peoples, relations) {
  if (!peoples || !relations)
    throw new Error("Error required params peoples, relations");
  const clean = relations.map((relation) => relation.value);
  const response = {
    peoples: peoples.results,
    relationships: clean,
  };
  return response;
}

module.exports = setResponse;
