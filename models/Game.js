const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Game = new Schema({
  index: String,
  name: String,
  platform: [String],
  genre: String, // The prevailing genre of the game (ex. Halo is a Shooter)
  tags: [String], // Keywords to add more nuiance to the description
  reviews: { type: [{ type: Schema.Types.ObjectId, ref: "Review" }] },
  maxPlayers: Number,
  modable: Boolean,
});

module.exports = mongoose.model("Game", Game);
