// Description: 

// A palindromic word is a word that can be read both ways: from left to right and from right to left.
// write a program that verifiy if a word is palindromic or not. 

// Solution:

function palindrome(str){
    for(let i=0;i<str.length/2;i++){
        if(str[i] !== str[str.length-1-i]){
            return "Non palindromic"
        }
    }
    return "Palindromic"
}

// Solution #2: Recursion

function palindrome2(str) {
    if(str.length === 1) return "Palindromic";
    if(str[0] === str.slice(-1)) return palindrome2(str.slice(1,-1))
    return "Non palindromic"
}
console.log(palindrome2("level"));