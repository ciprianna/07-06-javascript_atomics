// Set a password
var PassWord = "Flufferkins";

var UserPassWordGuess = prompt("Enter the password","");

if (UserPassWordGuess == PassWord) {
  alert("Good job!");
} else {
  alert("Sorry, the password is actually " + PassWord + ".");
}
