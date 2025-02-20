```javascript
const { MongoClient } = require('mongodb');

const uri = "YOUR_MONGODB_URI"; // Replace with your MongoDB connection string

async function run() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    // Correct query filter using $regex with case-insensitive flag
    const query = { 'field': { $regex: /pattern/i } };

    //Optionally, use the $options flag for case insensitivity
    // const query = { 'field': { $regex: 'pattern', $options: 'i' } };
    const result = await collection.find(query).toArray();
    console.log(result);

  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```