const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const createToken = async (req, res, next) => {
  const consumer = process.env.CONSUMER_KEY;
  const secret = process.env.CONSUMER_SECRET;

  try {
    const response = await axios({
      url: "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      method: "GET",
      headers: {
        Authorization: `Basic ${Buffer.from(`${consumer}:${secret}`).toString(
          "base64"
        )}`,
      },
    });

    req.token = response.data.access_token;
    console.log(response.data);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred");
  }
};

module.exports = { createToken };
