const express = require("express");
const cors = require("cors");

const TokenRoute = require("./routes/token");

const app = express();

app.use(express.json());
app.use(cors());

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", TokenRoute);
