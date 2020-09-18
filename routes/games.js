const express = require("express");
let router = new express.Router();
const gamesController = require(`../controllers/game`);
// redirects to games the controller
router.get("/", gamesController.index);
router.get("/:id", gamesController.findById);
router.get("/index/:index", gamesController.findByIndex);
router.post("/", gamesController.create);
router.put("/:id", gamesController.editById);
router.delete("/:id", gamesController.deleteById);

module.exports = router;
