const Game = require("../models/Game");

module.exports = {
  index: (req, res) => {
    Game.find({}).then((games) => {
      res.json(games);
    });
  },
};
