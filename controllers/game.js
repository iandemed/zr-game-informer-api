const Game = require("../models/Game");

module.exports = {
  index: (req, res) => {
    Game.find({})
      .populate("reviews")
      .then((games) => {
        res.json(games);
      });
  },
};
