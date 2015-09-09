/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

// write your solution here...
function tellFortune (children, partner, location, title) {
  console.log("You will be a " + title + " in " + location + ", and married to " + partner + " with " + children + " kids.")
}

var children = 3;
var partner = "Tom Hiddleston";
var location = "The Moon";
var title = "Queen of the Moon";
tellFortune (children, partner, location, title);

children = 1000;
partner = "King Henry IV";
location = "Ottoman Empire";
title = "Empress of Russia";
tellFortune (children, partner, location, title);

children = 0;
partner = "Your cat";
location = "Bottom of the Ocean";
title = "#1 Cat Lady";
tellFortune (children, partner, location, title);
