//detects when a key is pressed
 document.onkeyup = function(event){
     
//the letters to pick from
var letter_array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
for (var i = 0; i < letter_array.length; i++) {
    //the computer guess picks a random item from the array
var computer_guess = letter_array[Math.floor(Math.random()* letter_array.length)];
}
//logs the computer guess
console.log(computer_guess)
   //determines what key was pressed
    var user_guess = event.key;
    //if the pressed key = the random key alert
    if(user_guess === computer_guess){
        alert("you win")
       ;
    }
    else{
       
    }
    
};

