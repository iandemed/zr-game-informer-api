const express = require("express");
let router = new express.Router();

router.use("/games", require("./games"));
router.use("/reviews", require("./reviews"));

module.exports = router;
