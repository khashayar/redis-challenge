const client = require('./client')('config-enterprise.json');

// read the elements in the sorted set,
// ordered from the highest to the lowest score.
client.zrevrange('values', 0, -1, (error, items) => {
  if (error) {
    return console.error(`Unable to read values ${error}`);
  }

  console.log(`Found ${items.length} items:`, items);
})

client.quit();
