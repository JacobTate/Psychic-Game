//the letters to pick from
var letter_array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//gusses = the number of guesses you get
var guesses = 9;
//setting the values to 0
var wins = 0;
var losses = 0;
var picked_letter = [];

//gets the element by id for adding text
var wins_text = document.getElementById("winstext")
var losses_text = document.getElementById("lossestext")
var guesses_text = document.getElementById("guessestext")
var guessed_letter = document.getElementById("guessedletter")

//the computer guess picks a random item from the array
var get_random_item = function () {

    random_item = letter_array[Math.floor(Math.random() * letter_array.length)];
    //logs the computer guess
    console.log(random_item)
    return random_item
}
//resets the guessed letters and picks a new random letter
var reset = function () {
    computer_guess = get_random_item();
    guesses = 10;
    picked_letter = [];
}

//stores the functions output in a variable
var computer_guess = get_random_item();

//detects when a key is pressed
document.onkeyup = function (event) {

    //removes 1 guess
    guesses--

    //prints the nubmer of remaining guesses
    guesses_text.innerHTML = "guesses left: " + guesses

    //determines what key was pressed
    var user_guess = event.key;

    picked_letter.push(user_guess);
    guessed_letter.innerHTML = "your guess: " + picked_letter.join(', ');
    //if the pressed key = the random key   
    if (user_guess === computer_guess) {

        alert("YOU WON!")
        //runs the reset function
        reset();
        //adds 1 to the wins
        wins++

        //prints the number of wins to the screen
        wins_text.innerHTML = "wins: " + wins

    }

    if (guesses === 1) {

        //runs the reset function
        reset();

        //adds 1 to the losses
        losses++

        //prints the number of losses to the screen
        losses_text.innerHTML = "losses:" + losses

 
    }
}


//the code for the rules div
//closed the div
document.getElementById("closediv").style.display = "none";
//when run by a button closes the div
function closediv() {
    document.getElementById("closediv").style.display = "none";
};
//when run by a button opens the div 
function rules() {
    document.getElementById("closediv").style.display = "block";
}

  //the hint
  function hint(){
    if (computer_guess === "q" || computer_guess === "w" || computer_guess === "e" || computer_guess === "r" || computer_guess === "t" || computer_guess === "y" || computer_guess === "u" || computer_guess === "i" || computer_guess === "o" || computer_guess === "p") {
        alert("123")
    }
    else if(computer_guess === "a" || computer_guess === "s" || computer_guess === "d" || computer_guess === "f" || computer_guess === "g" || computer_guess === "h" || computer_guess === "j" || computer_guess === "k" || computer_guess === "l"){
        alert("321")
    }
    else{alert("258")}
    }