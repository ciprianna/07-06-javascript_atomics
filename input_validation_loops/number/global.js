var RightNumber = 17;

var UserInput = prompt("Choose a number", "");

var UserGuess = parseInt(UserInput);

while (UserGuess != RightNumber) {
  var UserInput = prompt("Choose a number", "");
  var UserGuess = parseInt(UserInput);
}

alert("Good job!");
