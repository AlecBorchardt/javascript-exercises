
const repeatString = function(string, num) {
    let word = string;
    for (let i = 1; i < num; i++){
        string += word;
    }
    if (num < 0){
        return ("ERROR");
    }
    else if (num == 0){
        return "";
    }
    else {
        return string;
    }
};

// Do not edit below this line
module.exports = repeatString;