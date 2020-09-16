const { Schema } = require("mongoose");

const Game = new Schema({
    index: String,
    name: String,
    platform: [String]
})