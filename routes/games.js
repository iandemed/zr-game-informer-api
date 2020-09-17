const express = require("express");
let router = new express.Router();
const gamesController = require(`../controllers/game`);

router.get("/", gamesController.index);

module.exports = router;
