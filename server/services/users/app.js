const express = require("express");
const app = express();
const port = process.env.PORT || 4001;
const cors = require("cors");
const router = require("./routes");
const { run } = require("./config/mongoConnection");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(router);

run()
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening at port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
