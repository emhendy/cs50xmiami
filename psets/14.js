/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

Create a function called celsiusToFahrenheit:
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...
function celsiusToFahrenheit (celsius) {
  var far = ((celsius * 9) / 5) + 32;
  console.log(celsius + "°C is " + far + "°F")
}

function fahrenheitToCelsius (fahrenheit) {
  var cel = ((fahrenheit - 32) * 5) / 9;
  console.log(fahrenheit + "°F is " + cel + "°C")
}

celsiusToFahrenheit (20);
fahrenheitToCelsius (78);
