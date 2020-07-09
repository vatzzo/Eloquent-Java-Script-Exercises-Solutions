// Flattening
// use reduce + concat -> outcome -> [1, 2, 3, 4, 5, 6]
let arrays = [[1,2,3], [4,5], [6]];

convertToSingleArray = function(array) {
    let singleArray = [];
    array.forEach(item => {
        singleArray = singleArray.concat(item);
    });

    return singleArray.reduce((total, currentValue) => { return total += currentValue })
}

let flatteningResult = convertToSingleArray(arrays);


// Your own loop
// Function that takes value, test function, update function, body function
function loop(value, test, update, body) {
    for(n = value; test(n); update()) {
        body(n);
    }
}

loop(4, n => { return n <= 10 } , () => { n++ }, n => console.log(n));

// Everything
A = [1,2,3,4,5,6,7,8,9,10]; // Array To Check
let valueToCheck = 7;

// Every - Do all elements in array satisfy given condition?
let everyResult = A.every(item => {
    return item == 3;
});

function every(array, predicate = function(item) {
    let boolean = item  < valueToCheck; // Check Condition
    return boolean; // Return Value
}) {
    let current = true;

    for(let item of array) {
        if(current !== false ) {
            current = predicate(item);
        }else {
            return current;
        }
    }
    return current;
}

// Some - Is there any number that satisfies the condition
let someResult = A.some(item => {
    return item >= valueToCheck;
});

function everySome(array, predicate = function(item) {
    return item >= valueToCheck;
}) {
    let boolean = array.some(predicate);
    return boolean;
}


console.log(`Every: ${everyResult}, Every Function: ${every(A)}, Some: ${someResult}, EverySome Function: ${everySome(A)}`);

