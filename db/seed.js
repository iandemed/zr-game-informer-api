const mongoose = require("./connection");

const Game = require("../models/Game");
const gameData = require("./games.json");

const Review = require("../models/Review");
const reviewData = require("./reviews.json");

Game.deleteMany({}).then(
  Game.create(gameData)
    .then(() => {
      console.log(gameData);
    })
    .catch((err) => {
      console.log("Failed to seed data.", err);
    })
);

Review.deleteMany({}).then(
  Review.create(reviewData)
    .then(() => {
      console.log(reviewData);
    })
    .catch((err) => {
      console.log("Failed to seed data.", err);
    })
);
