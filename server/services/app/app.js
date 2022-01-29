const express = require("express");
const app = express();
const port = process.env.PORT || 4002;
const cors = require("cors");
const router = require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
