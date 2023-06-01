// Description:

// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. 
// If there are two or more words that are the same length, return the first word from the string with that length. 
// Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

// Example: LongestWord("fun&!! time") ==> "time"
//			LongestWord("I love dogs") ==> "love"


// Solution:

function LongestWord(sen) { 
  var splitArr=sen.split(" ")
  var longest=splitArr[0]

  for(let i=0; i<splitArr.length-1; i++){
    for(let j=i+1;j<splitArr.length;j++){
      if(splitArr[i].length < splitArr[j].length)
      	longest=splitArr[j]
      	break
    }
  }
  return longest; 
}