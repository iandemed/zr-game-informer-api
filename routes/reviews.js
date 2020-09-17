const express = require("express");
let router = new express.Router();
const reviewsController = require(`../controllers/review`);

router.get("/", reviewsController.index);

module.exports = router;
