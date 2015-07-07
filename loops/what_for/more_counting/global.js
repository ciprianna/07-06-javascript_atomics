var StartInput = prompt("What number should we start with?");
var EndInput = prompt("Where should we end?");
var IncrementInput = prompt("What increment would you like to count by?");

var StartNumber = parseInt(StartInput);
var EndNumber = parseInt(EndInput);
var IncrementNumber = parseInt(IncrementInput);

console.log("Start number: " + StartNumber);
console.log("End number: " + EndNumber);

if (StartNumber < EndNumber) {
  for (StartNumber; StartNumber <= EndNumber; StartNumber += IncrementNumber) {
    console.log(StartNumber);
  }
} else {
  for (StartNumber; StartNumber >= EndNumber; StartNumber -= IncrementNumber) {
    console.log(StartNumber);
  }
}
