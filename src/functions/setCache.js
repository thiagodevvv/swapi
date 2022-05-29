const Redis = require("ioredis");
async function setCache(key, value, timeExp) {
  try {
    const client = new Redis({
      host: "172.21.0.3",
      port: 6379,
      keyPrefix: "cache:",
    });
    const cache = await client.set(key, JSON.stringify(value), "EX", timeExp);
    return cache;
  } catch (err) {
    return false;
  }
}
module.exports = setCache;
