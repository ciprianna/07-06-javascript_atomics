// Get inputs from the user
var InputOne = prompt("What's the length of the first leg in the triangle?", "");
var InputTwo = prompt("And the second leg?", "");
var InputThree = prompt("And the third?", "");

// Convert to Integers
var LegOne = parseInt(InputOne);
var LegTwo = parseInt(InputTwo);
var LegThree = parseInt(InputThree);

// Do addition for the legs
OneAndTwo = LegOne + LegTwo;
OneAndThree = LegOne + LegThree;
TwoAndThree = LegTwo + LegThree;

// Set true or false values for length of legs
var GreaterThanThree = OneAndTwo > LegThree;
var GreaterThanTwo = OneAndThree > LegTwo;
var GreaterThanOne = TwoAndThree > LegOne;

// Output to the console.log()
console.log(LegOne + " + " + LegTwo + "= " + OneAndTwo);
console.log("The sum of Leg 1 and Leg 2 is greater than Leg 3: " + GreaterThanThree);
console.log(LegOne + " + " + LegThree + "= " + OneAndThree);
console.log("The sume of Leg 1 and Leg 3 is greater than Leg 2: " + GreaterThanTwo);
console.log(LegTwo + " + " + LegThree + "= " + TwoAndThree);
console.log("The sum of Leg 2 and Leg 3 is greater than Leg 1: " + GreaterThanOne);

// Alerts
if (GreaterThanOne == false || GreaterThanTwo == false || GreaterThanThree == false) {
  alert("This is not a valid trianlge");
} else {
  alert("This is a valid triangle");
}
