// Get the user's age
var UserAge = prompt("How old are you?", "");

if (UserAge > 16) {
  alert("You're eligible for a driver's license");
}

if (UserAge > 21) {
  alert("Please don't drink and drive");
}

if (UserAge >= 25) {
  alert("You can rent a car");
}

if (UserAge >=0 && UserAge < 16) {
  alert("You can't drive yet, but you'll be able to in a few years");
}

if (UserAge < 0) {
  alert("You haven't been born yet");
}

if (isNaN(UserAge)) {
  alert("Sorry, but that's not a number");
}
