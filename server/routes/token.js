const express = require("express");

const { createToken } = require("../middlewares/stk-token");

const router = express.Router();

router.get("/token", createToken);

module.exports = router;
