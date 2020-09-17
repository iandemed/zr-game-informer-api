const { Schema } = require("mongoose");
const mongoose = require("../db/connection");

const Review = new Schema({
  // Reference to a unique Game document
  game: { type: Schema.Types.ObjectID, ref: "Game" },
  overall: {
    /* Currently user inputed, ideally this will be an average
     of all of the categories */
    type: Number,
    min: 1,
    max: 5,
  },
  difficulty: {
    type: Number,
    min: 1,
    max: 5,
  },
  graphics: {
    type: Number,
    min: 1,
    max: 5,
  },
  gameplay: {
    type: Number,
    min: 1,
    max: 5,
  },
  replayability: {
    type: Number,
    min: 1,
    max: 5,
  },
});

module.exports = mongoose.model("Review", Review);
