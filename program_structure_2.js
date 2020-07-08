// PROGRAM STRUCTURE

// ex. 1 - Looping a triangle
console.log("1. Looping a triangle");
const stars = "#######";
for (let i = 0; i < stars.length; i++) {
  let ds = stars.substring(0, i);
  console.log(ds);
}

// ex. 2 - FizzBuzz
console.log("2. FizzBuzz");
i = 1;
while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }

  i++;
}

// ex. 3 - Chessboard
const dash = "#";
const space = " ";
let outputString = " ";
console.log("3. Chessboard");
for (let rows = 1; rows <= 8; rows++) {
  switch (rows % 2) {
    case 0:
      outputString = "";
      break;
    default:
      outputString = " ";
      break;
  }

  for (let columns = 1; columns <= 8; columns++) {
    switch (columns % 2) {
      case 0:
        outputString += dash;
        break;
      default:
        outputString += space;
        break;
    }

    if (columns === 8) {
      outputString += "\n";
    }
  }
  console.log(outputString);
}
