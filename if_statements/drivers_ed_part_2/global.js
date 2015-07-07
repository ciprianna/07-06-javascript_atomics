// Get the user's age
var UserAge = prompt("How old are you?", "");

var RentACar = 25;
var DrinkingAge = 21;
var DrivingAge = 16;
var NewBorn = 0;


if (UserAge >= RentACar) {
  alert("You can rent a car");
} else if (UserAge >= DrinkingAge && UserAge < RentACar) {
  alert("Please don't drink and drive");
} else if (UserAge >= DrivingAge && UserAge < DrinkingAge) {
  alert("You're eligible for a driver's license");
} else if (UserAge >= NewBorn && UserAge < DrivingAge) {
  alert("You can't drive yet, but you'll be able to in a few years");
} else if (UserAge < NewBorn) {
  alert("You haven't been born yet");
} else {
  alert("Sorry, but that's not a number");
}
