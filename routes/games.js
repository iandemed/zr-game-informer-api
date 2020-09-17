const express = require("express");
let router = new express.Router();
const gamesController = require(`../controllers/game`);
const Game = require("../models/Game");

router.get("/", gamesController.index);

router.get("/index/:index", (req, res) => {
  Game.find({ index: req.params.index }).then((games) => res.json(games));
});

router.post("/", (req, res) => {
  Game.create(req.body).then((Game) => res.json(Game));
});

router.put("/index/:index", (req, res) => {
  Game.findOneAndUpdate({
    index: req.params.index,
  }).then((games) => {
    res.json(games);
  });
});

router.delete("/index/:index", (req, res) => {
  Game.findOneAndDelete({ index: req.params.index }).then((games) => {
    res.json(games);
  });
});

router.delete("/id/:id", (req, res) => {
  Game.findOneAndDelete({ _id: req.params.id }).then((games) => {
    res.json(games);
  });
});

module.exports = router;
