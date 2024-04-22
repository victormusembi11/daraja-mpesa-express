const dotenv = require("dotenv");
const axios = require("axios");

const { generateTimestamp } = require("../utils/timestamp");

dotenv.config();

const stkPush = async (req, res) => {
  const shortCode = process.env.SHORTCODE;
  const passkey = process.env.PASSKEY;
  const { phone, amount } = req.body;
  const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
  const timestamp = generateTimestamp();
  const password = new Buffer.from(shortCode + passkey + timestamp).toString(
    "base64"
  );

  const data = {
    BusinessShortCode: shortCode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: `254${phone}`,
    PartyB: shortCode,
    PhoneNumber: `254${phone}`,
    CallBackURL: "https://mydomain.com/pat",
    AccountReference: "Test",
    TransactionDesc: "Test",
  };

  try {
    const response = await axios({
      url,
      method: "POST",
      headers: {
        Authorization: `Bearer ${req.token}`,
      },
      data,
    });

    console.log(response.data);
    res.status(200).send(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred");
  }
};

module.exports = { stkPush };
