const Redis = require("ioredis");
async function getCache(key) {
  if (!key) return false;
  try {
    const client = new Redis({
      host: "172.21.0.3",
      port: 6379,
      keyPrefix: "cache:",
    });
    const value = await client.get(key);
    if (value) return JSON.parse(value);
    else return false;
  } catch (err) {
    console.log(err);
  }
}

module.exports = getCache;
