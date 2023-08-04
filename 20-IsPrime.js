// Description:

// Create a JS program that verifies if a number is prime or not

//Solution:

const isPrime = function(n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  for(var i=2; i<= n; i++){
    if( n%i === 0){
      return false
    }
  } 
  return true
};