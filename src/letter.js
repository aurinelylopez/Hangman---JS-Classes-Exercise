"use strict";

// Letter

// Letter is a class that accepts a value argument
// These are the attributes a Letter should have:

// value -> a string
// hidden -> a boolean set to true
// These are the behaviors a Letter should have:

// show -> sets hidden to false
// render() -> returns a _ if the letter is hidden, 
// returns the value if the letter is not hidden
// "use strict";


console.log('letter.js is connected');

class Letter {
  constructor(value) {
    this value = value;
    this hidden = true;
  }
  show() {
    this hidden = false;
    //What abilites go in the show method?
  }
  render() {
    if this.hidden === true {
      return '_'
    } else return this.value
      //How do you return '_' if the letter is hidden
      //And the letter if it's showing?
  }
}
