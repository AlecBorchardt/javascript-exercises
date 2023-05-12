const leapYears = function(year) {

    if (year % 4 == 0){
        if (year % 100 == 0){
            if (year % 400 == 0){
                return true;
            }
            else {return false};
        }
        else {return true};
    }
    else {return false};

};

// Do not edit below this line
module.exports = leapYears;

/*
pseudocode
Leap years are
    divisible by four or 400
    not divisible by 100. 
However, years divisible by 100 are not leap years 
(such as 1800 and 1900) unless they are divisible by 400

if div by 4 
    if div by 400
        true
    else false
if div by 100 but not 400
if div by 400

*/