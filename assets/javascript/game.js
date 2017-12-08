//define variables: wins, user guesses, guesses remaining, losses, potential words, word selected, and previous guesses
//Set up the array with potential words

var words = ["zebra", "lion", "tiger", "gazelle", "giraffe", "hippo", "elephant", "penguin", "leopard", "cheetah", "jaguar", "meerkat", "warthog", "hyena"];
var wordsIndex = 0;
var word = words[wordsIndex];
var letters = word.length;
var guess=" ";
var previousGuesses = [];
var remainingGuesses = 12;
var wins = 0;
var losses = 0;
var underscores = "";
var underscore = [];
var newUnderscores;
var correctGuesses = 0;

newWord();
//for each keystroke, check if the letter is in the word array 
//or a previous guesses array
document.onkeyup = function(event) {
    guess = event.key;

    //if the letter is in the word and not previously guessed, 
    //display the letter either in a blank or blanks 
    //use a loop to create a variable for each letter, use conditional to keep variable equal to letter if guess is a match, otherwise set variable equal to underscore, concatenate variables to a string to return to HTML, replacing underscores
    if (wordsIndex == words.length)
    {
        alert("You've played all of the available words! Here is your final score: <br>Wins: "+ wins +"<br>Losses: "+ losses);
    }

    else if (word.indexOf(guess) > -1) {
        correctGuess(guess);
        correctGuesses++;
        if(correctGuesses == word.length)
        {
            alert("You won!");
            wins += 1;
            playAgain();
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
        if (correctGuesses < word.length && remainingGuesses < 1)
        {
            alert("Sorry, you lost this round. The correct answer was " + word + ".");
            losses += 1;

            playAgain();
        }
    }

    else
    {
        console.log("duplicate entry");
    }

};


function newWord(){
    if(wordsIndex < words.length)
    {
        remainingGuesses = 12;
        previousGuesses.length = 0;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("previous-guesses").innerHTML = previousGuesses;
        document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
        word = words[wordsIndex];
        console.log("Selected word: " + word);

        //use word.length to display n underscores, where n = word[].length()
        var underscores = "";

        for (i = 0; i < word.length; i++) 
        {
            underscores = underscores + "_ ";
            document.getElementById("word").innerHTML = underscores;
        }

        //create an array of underscores
        underscore = underscores.split(" ");
        wordsIndex++;
        correctGuesses = 0;
        return;
    }

    else
    {
        alert("You've played all of the available words! Here is your final score: <br>Wins: "+ wins +"<br>Losses: "+ losses);
    }
};



function playAgain(){
    var playAgain = confirm("Do you want to play again?");
        
    if(playAgain == false)
    {
        return;
    }
    else
    {
        newWord();
    }

};

function correctGuess(guess){
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
        document.getElementById("word").innerHTML = newUnderscores;
    }
}