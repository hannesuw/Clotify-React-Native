const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://joanes:Johannes1@cluster0.kz7mn.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db;

function run() {
  return client
    .connect()
    .then(() => {
      db = client.db("brand_showcase");
    })
    .catch((err) => {
      throw err;
    });
}

function getDatabase() {
  return db;
}

module.exports = { run, getDatabase };
