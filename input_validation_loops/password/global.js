var PassWord = "Flufferkins";

var UserPassWordGuess = prompt("Enter the password","");

// while (UserPassWordGuess != PassWord) {
//   UserPassWordGuess = prompt("Sorry, try again","");
// }

for (PassWord; UserPassWordGuess != PassWord; UserPassWordGuess = prompt("Sorry, try again",""));

alert("Good job!");
