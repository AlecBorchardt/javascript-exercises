function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
function convertToCelsius(fahrenheit) {
  let x = (fahrenheit - 32) * (5 / 9);
  let y = round(x, 1);
	return y;
};

function convertToFahrenheit(celsius) {

  let x = (32 + (celsius/(5/9)));
  let y = round(x, 1);
  return y;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

/*
pseudocode

round() function


gets number of decimal places
let x = (f = 32 + (c/(5/9)));
let y = Math.floor(f = 32 + (c/(5/9)));
let z = x.length - y.length;
(c = (F - 32) * 5/9)




const convertToCelsius = function(fahrenheit) {

  let x = Math.round((fahrenheit - 32) * (5/9));
  function manualRounder(x){
    let y = x.toString().length;
    let z = Math.floor(x);
    let b = z.toString().length;
    let c = (y-b);
    let r = (c-1);
  
    for (let i = c; i > 1; i--){
      let q = Math.pow(10,i);
      let h = (x * q);
      let p = Math.round(h);
      return p;
      }

  }
};





// x is the unrounded result of conversion. (x in, p out)
function zalpha(x){
  let y = x.toString().length;
  let z = Math.floor(x);
  let b = z.toString().length;
  let c = (y-b);
  let q = Math.pow(10(c-1));
  let h = (x * q);
  let p = Math.round(h);
  return p;
}



*/
