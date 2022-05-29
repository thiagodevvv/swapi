const { describe, it } = require("mocha");
const chai = require("chai");
const { expect } = require("chai");
const chaiHttp = require("chai-http");
const express = require("express");
const routes = require("../../src/routes/routes");
const app = express();
app.use(routes);
chai.use(chaiHttp);

describe("#People API", () => {
  it("Error, required a param name", (done) => {
    chai
      .request(app.listen(8000))
      .get("/people")
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
  it("Not found peoples", (done) => {
    chai
      .request(app.listen(8000))
      .get("/people")
      .query({ name: "sdkjak22" })
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
  it("Sucess find people without cache", (done) => {
    chai
      .request(app.listen(8000))
      .get("/people")
      .query({ name: "kenobi" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Sucess find people with cache", (done) => {
    chai
      .request(app.listen(8000))
      .get("/people")
      .query({ name: "kenobi" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
