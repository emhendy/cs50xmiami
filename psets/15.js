/*
What number's bigger?

Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.

Call that function 2 times with different number pairs,
and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

// write your solution here...
function greaterNum (num1, num2) {
  var result = 0;
  if (num1 > num2) {
    result = num1;
  }
  else {
    result = num2;
  }
  console.log("The greater number of " + num1 + " and " + num2 + " is " + result + ".")
}

greaterNum (3, 10);

greaterNum (23, 3);
