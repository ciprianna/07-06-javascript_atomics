var RightNumber = 17;

var UserInput = prompt("Choose a number", "");

var UserGuess = parseInt(UserInput);

if (UserGuess === RightNumber) {
  alert("Good job!");
} else {
  alert("Sorry, the right number is " + RightNumber + ".");
}
