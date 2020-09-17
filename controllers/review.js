const Review = require("../models/Game");

module.exports = {
  index: (req, res) => {
    Review.find({}).then((reviews) => {
      res.json(reviews);
    });
  },
};
