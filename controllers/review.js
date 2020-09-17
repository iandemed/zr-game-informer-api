const Review = require("../models/Review");

module.exports = {
  index: (req, res) => {
    Review.find({}).then((reviews) => {
      res.json(reviews);
    });
  },
  findById: (req, res) => {
    Review.findById(req.params.id).then((review) => {
      res.json(review);
    });
  },
  create: (req, res) => {
    Review.create(req.body).then((review) => {
      res.json(review);
    });
  },
  editById: (req, res) => {
    Review.findOneAndUpdate({ _id: req.params.id }, req.body).then((review) => {
      res.json(review);
    });
  },
  deleteById: (req, res) => {
    Review.findOneAndDelete({ _id: req.params.id }, req.body).then((review) => {
      res.json(review);
    });
  },
};
