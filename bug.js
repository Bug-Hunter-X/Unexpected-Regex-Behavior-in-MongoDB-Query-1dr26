```javascript
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    // Incorrect query filter
    const query = { 'field': { $regex: /pattern/i } };
    const result = await collection.find(query).toArray();
    console.log(result);

  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```