const { describe, it } = require("mocha");
const assert = require("assert");
const setCache = require("../../src/functions/setCache.js");
const getCache = require("../../src/functions/getCache.js");

describe("#setCache", () => {
  it("Sucess set cache", async () => {
    const expireTime = 60 * 15;
    const expected = "OK";
    const actual = await setCache("testKey", "{msg:'hello world'}", expireTime);
    assert.equal(actual, expected);
  });
  it("Error set cache undefined expire time", async () => {
    const expected = false;
    const actual = await setCache("testKey", "{msg:'hello world'}");
    assert.equal(actual, expected);
  });
});

describe("#getCache", () => {
  it("Sucess get cache", async () => {
    const expected = "{msg:'hello world'}";
    const actual = await getCache("testKey");
    assert.deepEqual(actual, expected);
  });
  it("Empty cache", async () => {
    const expected = false;
    const actual = await getCache(`notExistsKey`);
    assert.equal(actual, expected);
  });
  it("Error, required a key", async () => {
    const expected = false;
    const actual = await getCache();
    assert.equal(actual, expected);
  });
  it("Error, get Cache", async () => {
    const expected = false;
    const actual = await getCache("x");
    assert.equal(actual, expected);
  });
});
