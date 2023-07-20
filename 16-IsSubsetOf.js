// Description:

// Write a JS program that verifies is a set is a subset of another larger set or not!

// Solution:

var theSubset=["toy problem","warmup","programming","development"];

Array.prototype.isSubsetOf = function (arr) {
    var counter=0
    for(var i=0; i<theSubset.length;i++){
      for(var j=0;j<arr.length;j++){
        if(theSubset[i] === arr[j]){
          counter++
        }
      }
    }
    if(counter === theSubset.length){
      return true
    } else {
      return false
    }
};