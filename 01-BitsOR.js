// Problem description:

// Have the function bitsOR(strArray) take the array of strings stored in strArray, which will only contain
// two strings of equal length that represent binary numbers, and return a final binary string that performed the bitwise OR
// opertion on both strings. A bitwise OR operation places a 0 in the new string where there are zeroes in both binary strings, 
// otherwise it places a 1 in the spot. 

// for example: if strArray is ["1001", "0100"] then your program should return the stirng "1101"


// Solution:

function bitsOR(strArray) {
    var result=""
    if(strArray[0].length !== strArray[1].length){
        return "Enter a valid array!"
    }
    else {
        for(i=0;i<strArray[0].length;i++){
            if(strArray[0][i] === "0" && strArray[1][i] === "0"){
                result= result+"0"
            }
            else {
                result=result+"1"
            }
        }   
    }
    return result
