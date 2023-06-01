// Description:

//In a given string, try to find the first non repeating character
//Example: FirstNonRepeatingChar("hi my name is hannah")  ==> "y"

//Solution:

function FirstNonRepeatingChar(str) {
	var isRepeated=false
	for(let i=0;i<str.length-1;i++){
		for(let j=i+1;j<str.length;j++){
			if(str[i] === str[j]){
				isRepeated = true
				break;
			} 
		}
		if(!isRepeated){
				return str[i]
			}
        isRepeated=false
	}
	return "There is no non repeating character"
}