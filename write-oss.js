const client = require('./client')('config-oss.json');

const multi = client.multi();

// insert the values as a sorted set
for (let i = 0; i < 100; ++i) {
  multi.zadd('values', i + 1, i + 1);
}

multi.exec((err, resp) => {
  if (err) {
    return console.error(`Error writing to Redis: ${err}`);
  }

  console.log('Inserted successfully!');
});

client.quit();
