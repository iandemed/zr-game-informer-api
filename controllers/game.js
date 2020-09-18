const Game = require("../models/Game");

module.exports = {
  index: (req, res) => {
    Game.find({})
      .populate("reviews")
      .then((games) => {
        res.json(games);
      });
  },
  findByIndex: (req, res) => {
    Game.find({ index: req.params.index })
      .populate("reviews")
      .then((games) => {
        res.json(games);
      });
  },
  findById: (req, res) => {
    Game.findById(req.params.id)
      .populate("reviews")
      .then((games) => {
        res.json(games);
      });
  },
  create: (req, res) => {
    Game.create(req.body).then((games) => {
      res.json(games);
    });
  },
  editById: (req, res) => {
    Game.findOneAndUpdate({ _id: req.params.id }, req.body).then((games) => {
      res.json(games);
    });
  },
  deleteById: (req, res) => {
    Game.findOneAndDelete({ _id: req.params.id }, req.body).then((games) => {
      res.json(games);
    });
  },
  deleteByIndex: (req, res) => {
    Game.findOneAndDelete({ index: req.params.index }, req.body).then(
      (games) => {
        res.json(games);
      }
    );
  },
};
