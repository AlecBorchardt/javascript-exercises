const sumAll = function(...args) {
    
    let toAdd = [];
    for (let arg of args){
        toAdd.push(arg);
    }
    if ((toAdd[0] > 0) && (toAdd[1] > 0) && (typeof toAdd[0] == typeof 0) && (typeof toAdd[1] == typeof 0)){
    toAdd.sort();
    for (let i = (toAdd[0] + 1); i < toAdd[1]; i++){
        toAdd.push(i);
    }
    //console.log(toAdd);
    let sum = 0;
    for (let num of toAdd){
        sum += num;
    }
    return sum;
    }
    else {return "ERROR"};
};

// Do not edit below this line
module.exports = sumAll;
/*
pseudocode

//stores the 2 numbers in an array.
const sumAll = function(...args) {
    if ((...args) > 0){
    }
    let toAdd = [];
    for (let arg of args){
        toAdd.push();
    }
    toAdd.sort();
    for (let i = toAdd[0]; i < toAdd[1]; i++){
        toAdd.push(i);
    }
    let sum = 0;
    for (let num of toAdd){
        sum += num;
    }
    return sum;
    }
    else {return "ERROR"}; 
};

iterates from the smallest to the largest number and stores each new value in the array.
adds the array values together.
if a parameter is less than 0 or not a number, return "ERROR"
else return sum.

*/