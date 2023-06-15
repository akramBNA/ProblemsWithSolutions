// Description:

//Write a JS program that returns common elements of tow given arrays in a new array

// Solution:

function ArraysCommon(array1, array2) {
	var resultArray=[]
	for(let i=0; i<array1.length; i++){
		if(array2.includes(array1[i]) === true){
			resultArray.push(array1[i])
		}
	}
	return resultArray
}