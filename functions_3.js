// FUNCTIONS

// ex. 1 - Minimum
function min(a, b) {
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  } else {
    return " Liczby są takie same.";
  }
}
console.log(`Mniejszą z liczb jest: ${min(1000, 100)}`);

// ex. 2 - Recrusion
function isEven(initValue) {
  str = Math.abs(initValue).toString();
  function checkEvenness(strValue) {
    if (strValue.charAt(strValue.length - 1) === "1") {
      console.log("Odd: " + strValue);
      return false;
    } else if (strValue.charAt(strValue.length - 1) === "0") {
      console.log("Even, " + strValue);
      return true;
    } else {
      return checkEvenness((parseInt(strValue) - 2).toString());
    }
  }
  return checkEvenness(str);
}

// ex. 3 - Bean Counting
countLetters = function (word, letter) {
  let result = 0;
  word = word.toString();
  letter = letter.toString();

  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] === letter) {
      result++;
    }
  }

  return result;
};

let letterAmounts = countLetters("sieijkSZmka", "s");
console.log(letterAmounts);
