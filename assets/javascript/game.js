//define variables: wins, user guesses, guesses remaining, losses, potential words, word selected, and previous guesses
//Set up the array with potential words

var words = ["zebra", "lion", "tiger", "gazelle", "giraffe", "hippo"];
var word;
var guess;
var previousGuesses = [];
var remainingGuesses = 12;
var wins = 0;
var losses = 0;
var underscores;
var underscore;

//select one word at random from words array
var word = words[Math.floor(Math.random() * words.length)];
console.log("Selected word: " + word);

//use a loop to set new array with letters contained in randomly selected word
//use array length to display n underscores, where n = word[].length()
// var letters = [word.split("")];
// console.log(letters);

var underscores = "";

for (i = 0; i < word.length; i++) 
{
    underscores = underscores + "_ ";
    document.getElementById("word").innerHTML = underscores;
}

//create an array of underscores
var underscore = underscores.split(" ");



//for each keystroke, check if the letter is in the word array 
//or a previous guesses array


document.onkeyup = function(event) {
    var guess = event.key;

    //if the letter is in the word and not previously guessed, 
    //display the letter either in a blank or blanks 
    //use a loop to create a variable for each letter, use conditional to keep variable equal to letter if guess is a match, otherwise set variable equal to underscore, concatenate variables to a string to return to HTML, replacing underscores
    if (word.indexOf(guess) > -1) {
        var index = word.indexOf(guess);
        var character = word.charAt(index);
        console.log("Character is: " + character);

        if (guess == character) {
            //add the correct letter in the right index of the underscore array
            underscore.splice(index, 1, guess);

            //search for if the letter occurs again in the word
            var duplicates = word.indexOf(guess, index + 1);
            if (duplicates > -1) {
                underscore.splice(duplicates, 1, guess);
            }

            //convert array back to a string
            var newUnderscores = underscore.toString();

            //remove commas, add spaces to keep look consistent
            newUnderscores = newUnderscores.replace(/,/g, " ");
            console.log(newUnderscores)
            document.getElementById("word").innerHTML = newUnderscores;
        }

        console.log("Correct guess: " + guess);
        console.log("Index of guess: " + word.indexOf(guess));
        document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
    }

    //if the letter is not in the word and not a previous guess, 
    //add it to the previously guessed array
    else if (word.indexOf(guess) == -1 && previousGuesses.indexOf(guess) == -1) {
        previousGuesses.push(" " + guess);
        document.getElementById("previous-guesses").innerHTML = previousGuesses;
        console.log("Incorrect guess: " + guess);

        //for each wrong guess, guesses remaining should decrease by 1
        remainingGuesses -= 1;
        document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
    }

    //if the letter is previously guessed or already displayed in the word, 
    //ignore the keystroke (do nothing)
    else {
        console.log("duplicate entry");
    }

    if (underscore.indexOf("_") == -1)
    {
        remainingGuesses = 0;
    }

    if (remainingGuesses = 0)
    {
        newWord();
    }

};

//If none of the letters are an underscore, wins increases by 1
if (underscore.indexOf("_") == -1) {
    var playAgain = prompt("You won! Do you want to play again? (y/n)");
        if(playAgain == "y")
        {
            newWord();
            remainingGuesses = 12;
            previousGuesses.length = 0;
            document.getElementById("previous-guesses").innerHTML = previousGuesses;
            document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
        }
    wins += 1;
}


//If remainingGuesses = 0 and the word is not completed, losses increases by 1
if (remainingGuesses == 0 && underscore.indexOf("_") > -1) {
    var playAgain = prompt("Sorry, you lost this round. The correct answer was " + word + ". Do you want to play again? (y/n)");
        if(playAgain == "y")
        {
            newWord();
            remainingGuesses = 12;
            previousGuesses.length = 0;
            document.getElementById("previous-guesses").innerHTML = previousGuesses;
            document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
        }
    losses += 1;
}

function newWord(){
    //select one word at random from words array
    var word = words[Math.floor(Math.random() * words.length)];
    console.log("Selected word: " + word);

    //use a loop to set new array with letters contained in randomly selected word
    //use array length to display n underscores, where n = word[].length()
    // var letters = [word.split("")];
    // console.log(letters);

    var underscores = "";

    for (i = 0; i < word.length; i++) 
    {
        underscores = underscores + "_ ";
        document.getElementById("word").innerHTML = underscores;
    }

    //create an array of underscores
    var underscore = underscores.split(" ");
    var guess = "";

};