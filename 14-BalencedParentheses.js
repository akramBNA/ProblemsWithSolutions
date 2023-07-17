// Description:

// Create a JS program that verifies if the number of parentheses in a given string is balanced

// Solution:

const isBalanced = function (str) {
    var leftParentheses="("
    var rightParentheses=")"
    var countLeft=0
    var countRight=0

if(typeof(str) === "string"){
    for(var i=0;i<str.length; i++){
        if(str[i] === leftParentheses ){
            countLeft++
        }
        else if(str[i] === rightParentheses){
        countRight++
        }
    } 

    if( countRight === countLeft){
        return true
    }
        
        return false
}
else {
    return "please enter a string"
}

    
};