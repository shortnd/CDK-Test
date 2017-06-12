$numbers = $('.numbers');

for (var i = 1; i <= 100; i++) {
  //Checks to see if i is divisible by 3 and 7
  if (i%3 === 0 && i%7 === 0) {
    // Appends i to numbers and adds a paragraph with a class or orange
    // and also adds -CDK to the end
    $numbers.append("<p class='orange'>" + i + " -CDK </p>");
    // Checks to see if i is divisible by only 7
  } else if(i%7 === 0) {
    // Appends i to numbers adds a paragraph with class of blue
    $numbers.append("<p class='blue'>" + i + "</p>");
    // Checks to see if i is divisible by only 3
  } else if (i%3 === 0) {
    // Appends i to numbers adds a paragraph with no class
    // and also -CDK to it also
    $numbers.append("<p>" + i + " -CDK </p>");
  } else {
    // Appends paragraph with i if it doesn't fit any of the
    // other tests
    $numbers.append("<p>" + i + "</p>");
  }
}
