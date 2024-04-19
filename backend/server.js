const express = require("express");
const cors = require("cors");
const { data } = require("../data/data");
const app = express();

app.use(cors());
app.use(express.json());
const PORT = 5000;

app.listen(5000, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get("/", function (req, res) {
  res.send("Hello from backend");
});

app.get("/clients", function (req, res) {
  res.send(data);
});

app.post("/client", function (req, res) {
  const newClient = req.body;
  data.push(newClient);
  res.send(`Inserted ${newClient.name}`);
});
