var StartInput = prompt("What number should we start with?");
var EndInput = prompt("Where should we end?");

var StartNumber = parseInt(StartInput);
var EndNumber = parseInt(EndInput);

console.log("Start number: " + StartNumber);
console.log("End number: " + EndNumber);

if (StartNumber < EndNumber) {
  for (StartNumber; StartNumber <= EndNumber; StartNumber++) {
    if (StartNumber % 3 == 0 && StartNumber % 5 == 0) {
      console.log("FizzBuzz");
    } else if (StartNumber % 5 == 0) {
      console.log("Buzz");
    } else if (StartNumber % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(StartNumber);
    }
  }
} else {
  for (StartNumber; StartNumber >= EndNumber; StartNumber--) {
    if (StartNumber % 3 == 0 && StartNumber % 5 == 0) {
      console.log("FizzBuzz");
    } else if (StartNumber % 5 == 0) {
      console.log("Buzz");
    } else if (StartNumber % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(StartNumber);
    }
  }
}
