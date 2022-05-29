const express = require("express");
const routes = require("./src/routes/routes.js");
const PORT = 3000;
const server = express();
server.use(routes);
server.listen(PORT, () => {
  console.log(`Server started in PORT: ${PORT}`);
});
