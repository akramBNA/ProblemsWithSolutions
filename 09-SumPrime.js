// Description:

//Write a JS program that sums all prime numbers below the number given to it.

// Solution:

function isPrime(nbr) {
	for(let i=nbr-1;i>1;i--){
		if(nbr % i === 0){
			return false
		}
	}
		return true
}

function SumPrime(nbr) {
	var result=0
	for(let i=nbr-1; i>0; i--){
		if(isPrime(i) === true){
			result=result+i
		}
	}
	return result
}