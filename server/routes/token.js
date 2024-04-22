const express = require("express");

const { createToken } = require("../middlewares/stk-token");
const { stkPush } = require("../controllers/stk");

const router = express.Router();

router.post("/token", createToken, stkPush);

module.exports = router;
