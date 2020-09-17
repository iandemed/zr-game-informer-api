const express = require("express");
let router = new express.Router();
const gamesController = require(`../controllers/game`);
const Game = require("../models/Game");

router.get("/", gamesController.index);

router.get("/name/:name", (req, res) => {
  Game.find({ name: req.params.name }).then((games) => res.json(games));
});

router.post("/", (req, res) => {
  Game.create(req.body).then((Game) => res.json(Game));
});

router.put("/name/:name", (req, res) => {
  Game.findOneAndUpdate({
    name: req.params.name,
  }).then((games) => {
    res.json(games);
  });
});

router.delete("/name/:name", (req, res) => {
  Game.findOneAndDelete({ name: req.params.name }).then((games) => {
    res.json(games);
  });
});

router.delete("/id/:id", (req, res) => {
  Game.findOneAndDelete({ _id: req.params.id }).then((games) => {
    res.json(games);
  });
});

module.exports = router;
