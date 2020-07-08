// DATA STRUCTURES
// ex.1 - The Sum of a Range
createArray = function (r, j, jump = 1) {
  let array = [];
  if (j < r) {
    let k = 0;
    for (i = r; i >= j; i -= Math.abs(jump)) {
      array[k] = i;
      k++;
    }
    return array;
  } else {
    let k = 0;
    for (i = r; i <= j; i += Math.abs(jump)) {
      array[k] = i;
      k++;
    }
    return array;
  }
};

sumArray = function (array) {
  let result = 0;
  for (let i of array) {
    result += array[i];
  }
  return result;
};

// ex. 2 - Reversing an Array
function reverseArray(arrayToReverse) {
  let arrayReversed = [];
  for (let item = 0; item < arrayToReverse.length; item++) {
    arrayReversed[arrayToReverse.length - item] = arrayToReverse[item];
  }
  return arrayReversed;
}
// Side Effects
let arrayToReverse = [1, 2, 5, 4];
function reverseArrayInPlace() {
  let tempArray = [];
  for (let i = 0; i < arrayToReverse.length; i++) {
    tempArray[arrayToReverse.length - i] = arrayToReverse[i];
  }
  arrayToReverse = tempArray;
}

reverseArrayInPlace();
console.log(arrayToReverse);
// A list
console.log("3. A list");
console.log("3.1. arrayToList function");

let A = [1, 2, 3];

// ex. 3 - A List
function arrayToList(arrayToMakeList) {
  let list = {};
  for (let item of arrayToMakeList) {
    list = {
      value: item,
      rest: list,
    };
  }
  return list;
}

let list1 = arrayToList(A);

function listToArray(listToMakeArray) {
  let arrayFromList = [];
  let list = listToMakeArray;
  let i = 0;
  function find() {
    if (list.value !== undefined) {
      arrayFromList[i] = list.value;
      list = list.rest;
      i++;
      return find(list);
    } else {
      return arrayFromList;
    }
  }
  return find();
}

console.log("3.3. Add Element to List - prepend function");
function prepend(list, element) {
  list = {
    value: element,
    rest: list,
  };
  return list;
}

let list2 = prepend(list1, 2);

console.log("3.3. Add Element to List - nth function");
console.log(` Investigated array: ${listToArray(list2)} `);

function nth(list, number) {
  let tempList = list;
  let elementIndex = 0;

  function find() {
    switch (tempList.value) {
      case number:
        return elementIndex;
      case undefined:
        return "There is no such a value";
      default:
        elementIndex++;
        tempList = tempList.rest;
        return find();
    }
  }
  return find();
}
