const express = require("express");

const TokenRoute = require("./routes/token");

const app = express();

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", TokenRoute);
