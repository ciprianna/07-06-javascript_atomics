// Get user inputs for three numbers.
var FirstInput = prompt("Choose a number", "Enter number");
var SecondInput = prompt("Choose a number", "Enter number");
var ThirdInput = prompt("Choose a number", "Enter number");

var FirstNumber = parseInt(FirstInput);
var SecondNumber = parseInt(SecondInput);
var ThirdNumber = parseInt(ThirdInput);

// Run the addition operation
var SumOfThree = FirstNumber + SecondNumber + ThirdNumber;
// Alert the user with the result
alert(FirstNumber + " + " + SecondNumber + " + " + ThirdNumber + "= " + SumOfThree);

// Subtraction
var SubtractSecondAndThird = FirstNumber - SecondNumber - ThirdNumber;
alert(FirstNumber + " - " + SecondNumber + " - " + ThirdNumber + "= " + SubtractSecondAndThird);

// Multiplication
var ProductOfThree = FirstNumber * SecondNumber * ThirdNumber;
alert(FirstNumber + " * " + SecondNumber + " * " + ThirdNumber + "= " + ProductOfThree);

// Division
var FirstDividedBySecond = FirstNumber / SecondNumber;
alert(FirstNumber + " / " + SecondNumber + "= " + FirstDividedBySecond);

// Incrementation
// Must set another variable to modify, because incrementation and
//   decrementation permanently modify the original value.
var PrepIncrementFirstNumber = FirstNumber
var IncrementedFirstNumber = ++PrepIncrementFirstNumber;
alert(FirstNumber + " ++ = " + IncrementedFirstNumber);

// Decrementation
var PrepDecrementSecondNumber = SecondNumber
var DecrementSecondNumber = --PrepDecrementSecondNumber;
alert(SecondNumber + " -- = " + DecrementSecondNumber);
