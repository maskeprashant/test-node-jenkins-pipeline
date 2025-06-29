const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/health", (req, res) => {
  res.json({ status: "UP", message: "Server is running smoothly!" });
});

app.post("/data", (req, res) => {
  const data = req.body;
  console.log("Received data:", data);
  res.json({ message: "Data received successfully", data });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
