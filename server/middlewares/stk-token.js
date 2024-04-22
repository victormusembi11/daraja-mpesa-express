const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const createToken = async (req, res, next) => {
  const consumer = process.env.CONSUMER_KEY;
  const secret = process.env.CONSUMER_SECRET;

  try {
    const response = await axios({
      url: process.env.STK_TOKEN_URL,
      method: "GET",
      headers: {
        Authorization: `Basic ${Buffer.from(`${consumer}:${secret}`).toString(
          "base64"
        )}`,
      },
    });

    console.log(response.data);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred");
  }
};

module.exports = { createToken };
