function middlewareLogger(req, res, next) {
  console.log(
    `Called endpoint: ${req.path} with method: ${
      req.method
    }\nWith Params: ${JSON.stringify(req.query)}\n - - - - - - - - - - - - `
  );
  next();
}

module.exports = middlewareLogger;
