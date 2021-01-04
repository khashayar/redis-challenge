const fs = require('fs');
const redis = require('redis');

module.exports = (configPath) => {
  let options;

  try {
    const config = fs.readFileSync(configPath);
    options = JSON.parse(config);
  } catch(e) {
    throw 'Unable to parse JSON config!';
  }

  console.log('Loaded config options:', options);

  const client = redis.createClient(options);

  client.on('connect', () => console.log(`Connected successfully!`));
  client.on('error', (error) => console.error(`Error while connecting to Redis: ${error}`));

  return client;
}
