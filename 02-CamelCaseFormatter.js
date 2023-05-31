// Description:

// Given an array of strings that must contain at least two strings. Write a function that concatinate this array of strings in to one string
// that respects the camel case format.

// For example: strArr = ["hello", "world"]
// 			output: "helloWorld"


// Solution:

function FirstLetterCapital(str) {
	return str[0].toUpperCase()+str.slice(1)
}

function CamelCaseFormatter(strArr) {
	if(strArr.length < 2){
		return "Enter more than two strings"
	}else {
		var result = strArr[0]
		for(var i=1; i<strArr.length; i++){
			result=result+FirstLetterCapital(strArr[i])
		}
	}
	return result
}