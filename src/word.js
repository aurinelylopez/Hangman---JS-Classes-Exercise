"use strict";

// Word is a class that accepts an word argument
// These are the attributes a Word should have:

// letters -> an array
// These are the behaviors a Word should have:
// k
// getLetters -> accepts a word argument as a string, 
// then fills letters array by creating individual 
// Letter objects for each letter in the given word. 
// This method will be called in the constructor for 
// the word, and stored as an attribute of the word.

// isFound -> returns true if the word is found, 
// false otherwise 

// try -> accepts a letter argument 
// as a string, will reveal the letter if it is found, 
// will return true if a letter was found and false if it wasn't


// render -> returns the word in it's guessed state
// ex: for the word 'closure', if the letters l, s, and e have been guessed, this function should return the string _ l _ s _ _ e



console.log('word.js is connected');
class Word {
	constructor() {
		this.letters =[];
		this.getLetters(word);
	}
		let split = word.split('')
		for (i = 0; i < split.length; i++) {
			this.letters.push(new letter(split[i]))
		} //Put attributes here!
		// Reminder: This will construct Letter objects}}


		isfound() {
				for (i = 0; i < this.letters.length; i++) {
					if (this.letters[i].hidden === true)
				} else {
					return true
				}
			}
			//try -> accepts a letter argument 
			//as a string, will reveal the letter if it is found, 


			//will return true if a letter was found and false if it wasn't 
		try (letter) {
			let attempt =  letter.toUpperCase();
		for (i = 0; i < this.letters.length; i++) {
			if (this.letters[i].hidden === true) {
				return false
			}
		} 
//render -> returns the letter in it's guessed state
//ex: for the word 'closure', if the letters l, s, 
///and e have been guessed, this function should 
//return the string _ l _ s _ _ e
// loop through each word and returning the value of each loop
//if the word is not found
	

	renderletter() {
	let renderletter = ''
	for (var i = 0; i < this.letters.length; i++) {
		renderletter = renderletter + this.letters[i].render() + ''
	}
	console.log(renderletter)
}
