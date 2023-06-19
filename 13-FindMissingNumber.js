// Description:

//Given two arrays. one of them is missing a number.
//Find the missing number.

// Solution:

function findMissingNumber(array1, array2) {
	if(array1.length === array2.length){
		return "Arrays are equal! try again"
	}else{
		if(array1.length > array2.length){
			for(let i=0;i<array1.length;i++){
				if(array1[i] !== array2[i]){
					return "Missing number is: "+array1[i]
				}	
		}
		} else {
			for(let i=0;i<array2.length;i++){
				if(array1[i] !== array2[i]){
					return "Missing number is: "+array2[i]
				}	
		}
		
	}
}

}

// Extra work:
//try it with more than one missing number!!