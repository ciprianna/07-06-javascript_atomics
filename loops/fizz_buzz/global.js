var StartInput = prompt("What number should we start with?");
var EndInput = prompt("Where should we end?");

var StartNumber = parseInt(StartInput);
var EndNumber = parseInt(EndInput);

console.log("Start number: " + StartNumber);
console.log("End number: " + EndNumber);

if (StartNumber < EndNumber) {
  while (StartNumber <= EndNumber) {
    if (StartNumber % 3 == 0 && StartNumber % 5 == 0) {
      console.log("FizzBuzz");
      StartNumber++;
    } else if (StartNumber % 5 == 0) {
      console.log("Buzz");
      StartNumber++;
    } else if (StartNumber % 3 == 0) {
      console.log("Fizz");
      StartNumber++;
    } else {
      console.log(StartNumber);
      StartNumber++;
    }
  }
} else {
  while (StartNumber >= EndNumber) {
    if (StartNumber % 3 == 0 && StartNumber % 5 == 0) {
      console.log("FizzBuzz");
      StartNumber--;
    } else if (StartNumber % 5 == 0) {
      console.log("Buzz");
      StartNumber--;
    } else if (StartNumber % 3 == 0) {
      console.log("Fizz");
      StartNumber--;
    } else {
      console.log(StartNumber);
      StartNumber--;
    }
  }
}
