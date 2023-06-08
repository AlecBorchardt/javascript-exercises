const fibonacci = function(fibNum) {

    Number(fibNum);

    let fibArray = [1];
    
    let adder = function(a, b) {
      return a + b;
    };
    
if(fibNum > 0){

    for (let i = fibNum; i > 1; i--) {
      let tempArray = fibArray.slice(Math.max(fibArray.length - 2, 0));
      let tempCalc = tempArray.reduce(adder);
      fibArray.push(tempCalc);

      console.log(tempArray);
      console.log(tempCalc);
      console.log(fibArray);
    }

return fibArray[(fibNum-1)];
}

else {
return "OOPS";
}
};

// Do not edit below this line
module.exports = fibonacci;
