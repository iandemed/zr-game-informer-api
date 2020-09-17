const mongoose = require("./connection");
const Game = require('./models/Game');
const Review = require('./models/Review');
const games = require('./games.json');

const newGameData = games.map((d) => {
    let newReview = d.reviews.map((m)) = {
    let 
    
    
    
   
    

 
  




  // deletes data and starts fresh
  Character.deleteMany({}).then(() => {
    Character.create(newCharacterData)
      .then((characters) => {
        console.log(characters);
      })
      .catch((err) => {
        console.log(err);
      });
  });