// Description:

//Write a JS program that takes a number as its argument and returns a string that represents that number's simplified fraction.

// Solution:

var toFraction = function(number) {
  var frac=0
  var result=""
  for(var i=1; i<10; i++){
    if(Number.isInteger(number * i) === true){
      frac = number *i
      result = frac+"/"+i
      return result
    }
  }

};

