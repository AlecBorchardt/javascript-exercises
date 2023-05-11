const removeFromArray = function(array, ...args) {
    // gets all arguments and puts them into an array.
    for (let arg of args){
        // for each item, search the array for a match and remove it.
        const index = array.indexOf(arg);
        if (index > -1) {
            array.splice(index, 1);
        }
    }

    console.log(array);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

/*
Pseudocode

const array = [2, 5, 9];

console.log(array);

const index = array.indexOf(5);
if (index > -1) { // only splice array when item is found
  array.splice(index, 1); // 2nd parameter means remove one item only
}

// array = [2, 9]
console.log(array); 

removes a single value
make a loop that pops the last value as many times as the number of inputs.
*/