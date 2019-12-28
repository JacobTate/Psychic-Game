   //the letters to pick from
var letter_array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var gusses = 9;
var wins = 0;
var losses = 0;
var picked_letter = [];   

 //the computer guess picks a random item from the array
  var get_random_item = function() {
      
     random_item = letter_array[Math.floor(Math.random()* letter_array.length)];
     //logs the computer guess
    console.log(random_item)
    return random_item
}
//resets the guessed letters and picks a new random letter
var reset = function(){
    computer_guess = get_random_item();
    gusses = 9;
}

//stores the functions output in a variable
var computer_guess = get_random_item();

//detects when a key is pressed
document.onkeyup = function(event){
    gusses--
    //determines what key was pressed
  var user_guess = event.key;
   //if the pressed key = the random key 
if(user_guess === computer_guess){
    alert("you win");  
    //runs the reset function
    reset();  
    wins++
}
if(gusses === 0){
    alert("you lost")
    //runs the reset function
    reset();
    losses++
    picked_letter.push(user_guess);
}
};
document.getElementById("gamediv")







 
    
    
  
        

    


