# Hangman
This weekend we will be creating the popular game Hangman!</br>
Your goal is to create a fully functioning game in the console, by using Javascript classes.


## Class Objects
You will need to create the following class objects in the order listed below tbale. Also use the table to provide your your estimated,invested and completion times.  

| Class | Order of Creation | Estimated Time | Invested Time | Completion Status | Completion Time | 
| :---: | :---: |  :---: | :---: | :---: | :---: | 
| letter | 1 |  |  |  |
| word | 2 |  |  |  |
| game | 3 |  |  |  |

## Create the folowing classes in separate .js files

### Letter

- Letter is a class that accepts a value argument

These are the attributes a Letter should have:

  - `value` -> a string
  - `hidden` -> a boolean set to true

These are the behaviors a Letter should have:

- `show` -> sets hidden to false
- `render()` -> returns a _ if the letter is hidden, returns the value if the letter is not hidden

### Word

- Word is a class that accepts an word argument

These are the attributes a Word should have:

  - `letters` -> an array

These are the behaviors a Word should have:

  - `getLetters` -> accepts a `word` argument as a string, then fills `letters` array by creating individual `Letter` objects for each letter in the given word. This method will be called in the constructor for the word, and stored as an attribute of the word.
  - `isFound` -> returns `true` if the word is found, `false` otherwise
  - `try` -> accepts a letter argument as a string, will reveal the letter if it is found, will return `true` if a letter was found and false if it wasn't
  - `render` -> returns the word in it's guessed state
    - ex: for the word 'closure', if the letters `l`, `s`, and `e` have been guessed, this function should return the string `_ l _ s _ _ e`

### Game
- Game is a class

These are the attributes a Game should have:

  - `guesses` -> initially set to null
  - `guessedLetters` -> initially set to null
  - `currentWord` -> initially set to null

These are the behaviors a Game should have:

  - `startGame`
    - accepts a word (string) as an argument
    - sets `guesses` to 8
    - resets the `guessedLetters` to an empty array
    - sets `currentWord` to an instance of the `word` object, passing in the word as a string argument

  - `guess` -> will try a letter, if the letter has not already been tried
  - `isOver` -> returns true if the current word has been guessed or there are no more guesses
  - `overMessage()`
    - returns "YAY!! You won!!" if the current word is found
    - returns "Sorry, you lost!" if there are no more guesses
    - returns undefined if neither condition is met
  - `render` -> returns rendered word, and number of guesses left, and the guessed letters so far
  
## Deliverables
Your finished project should run in the console tab of the google developer tools. Once you load your index.html you will start by declaring a new Game object, lets say you call it newGame. Next you will call the start game method on new game, this will take a word. Finally you should be able to call a guess method on new game and guess a letter. Read the above class descriptions carefully and make sure your game contains all the functionality they describe.

## BONUS!
Do you have hangman fully functioning in the console? Great! Now, create an app.js file and using your knowledge of the DOM, put this game in the browser. You can go about this however you would like.
