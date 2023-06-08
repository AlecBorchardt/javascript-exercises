const palindromes = function(stringy) {

    stringy = stringy.toLowerCase().replace(/[.,\/#!$%\^&\*;! :{}=\-_`~()]/g,"");

let strungy = stringy.split('');

let strangy = strungy.reverse().join("");

console.log(stringy);
console.log(strangy);

if (stringy == strangy){
return true;
}
else {
return false;
}

}

// Do not edit below this line
module.exports = palindromes;
