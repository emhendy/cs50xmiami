/*
The Geometrizer

Calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...
var radius = 5;
var circumference = Math.PI * 2 * radius;
console.log("The circumference is " + circumference)

var area = Math.PI * (radius * radius);
console.log("The area is " + area)
