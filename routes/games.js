const express = require("express");
let router = new express.Router();
const gamesController = require(`../controllers/game`);
const Game = require("../models/Game");


router.get("/", gamesController.index);
router.get("/:id", gamesController.findById);
router.post("/", gamesController.create);
router.put("/:id", gamesController.editById);
router.delete("/:id", gamesController.deleteById);


module.exports = router;
