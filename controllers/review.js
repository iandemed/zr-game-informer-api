const Review = require("../models/Review");

module.exports = {
  index: (req, res) => {
    Review.find({}).then((reviews) => {
      res.json(reviews);
    });
  },
};
