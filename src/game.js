"use strict";

// Game

// Game is a class
// These are the attributes a Game should have:

// guesses -> initially set to null

// guessedLetters -> initially set to null

// currentWord -> initially set to null
// These are the behaviors a Game should have:

// startGame

// accepts a word (string) as an argument
// sets guesses to 8
// resets the guessedLetters to an empty array

// sets currentWord to an instance of the word object, 
// passing in the word as a string argument


// guess -> will try a letter, if the letter has not already been 
// tried

// isOver -> returns true if the current word has been guessed or 
// there are no more guesses

// overMessage()

// returns "YAY!! You won!!" if the current word is found
// returns "Sorry, you lost!" if there are no more guesses
// returns undefined if neither condition is met
// render -> returns rendered word, and number of guesses left, and the guessed letters so far

console.log('game.js is connected');

class Game {
  constructor() {
this.guesses = null
this.guessedLetters = null
this.currentWord = null

 }
}


// startGame

// accepts a word (string) as an argument
// sets guesses to 8
// resets the guessedLetters to an empty array

// sets currentWord to an instance of the word object, 
// passing in the word as a string argument

startGame(word){
  	this.guesses=8;
  	this.guessedLetters=" ";
  	this.currentWord= new Word(word);
    console.log(`Guess A word that contains ${word.length} letters , you have 8 guesses`)
 }

// guess -> will try a letter, if the letter has not already been 
// tried


 guess(anyletter){
    this.guesses--;
    if(this.currentWord.try(anyletter)==true){
      
      console.log(`Go on`);
      this.render()
}

//I wasnt able to check if my work was actually working on chrome or moz as 
//i was getting an error that was only able to fix later in the night so I 
//know i made a bunch of errors. 