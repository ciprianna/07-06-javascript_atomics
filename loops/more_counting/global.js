var StartInput = prompt("What number should we start with?");
var EndInput = prompt("Where should we end?");

var StartNumber = parseInt(StartInput);
var EndNumber = parseInt(EndInput);

console.log("Start number: " + StartNumber);
console.log("End number: " + EndNumber);

if (StartNumber < EndNumber) {
  while (StartNumber <= EndNumber) {
    console.log(StartNumber);
    StartNumber++;
  }
} else {
  while (StartNumber >= EndNumber) {
    console.log(StartNumber);
    StartNumber--;
  }
}
