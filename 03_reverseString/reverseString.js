const reverseString = function(string) {

    let letters = string.split("");
    let reverse = [];
for (let i = string.length; i >= 0; i--){
    reverse.push(letters[i]);
}



    //function(){
      //  for (let i = letters.length(); i < 0; )
    //}


    //string.split();
    //string.length();
    return reverse.join("");
};

// Do not edit below this line
module.exports = reverseString;

/*
Pseudocode.
takes string, breaks it into pieces, then returns them in reverse order.


*/