const Game = require("../models/Game");
const gameData = require("./games.json");

const Review = require("../models/Review");
const reviewData = require("./reviews.json");
// Deletes any existing data, and creates fresh Game data
Game.deleteMany({}).then(
  Game.create(gameData)
    .then(() => {
      console.log(gameData);
    })
    .catch((err) => {
      console.log("Failed to seed data.", err);
    })
);
// Deletes any existing data, and creates fresh Review data
Review.deleteMany({}).then(
  Review.create(reviewData)
    .then(() => {
      console.log(reviewData);
    })
    .catch((err) => {
      console.log("Failed to seed data.", err);
    })
);
