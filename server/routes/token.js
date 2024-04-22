const express = require("express");

const { createToken } = require("../middlewares/stk-token");
const { stkPush, confirmPayment } = require("../controllers/stk");

const router = express.Router();

router.post("/token", createToken, stkPush);
router.post("/confirm", confirmPayment);

module.exports = router;
