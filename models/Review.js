const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Review = new Schema({
  // game: { type: Schema.Types.ObjectId, ref: "Game" },
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
  comments: {
    String,
  }
});

module.exports = mongoose.model("Review", Review);
