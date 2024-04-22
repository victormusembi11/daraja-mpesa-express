const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const TokenRoute = require("./routes/token");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", TokenRoute);
