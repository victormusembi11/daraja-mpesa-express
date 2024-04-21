const express = require("express");

const app = express();

app.listen(5000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
