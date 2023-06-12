/**
 * Alphabet Inventory
 * Given an alphabet and a string of text, write a method that tallies the count of each letter defined in said alphabet (case insensitive), then return the result of this tally.
 * alphaCount("aBc", "aabbccdd") // "a:2,b:2,c:2"
 * alphaCount("x", "Racer X is my friend") //	"x:1"
 * alphaCount("123", "o hai") // "no matches"
 *
 * @function alphaCount
 * @param {String} alphabet
 * @param {String} text
 * @return {String}
 *
*/

// works with arrays, and below works with strings !!

const alphaCount = (alphabet, text) => {
    var localCount=0
    var principalCount=[]

    for(var i=0; i<alphabet.length;i++){
        for(var j=0; j<text.length;j++){
    // localeCompare() it's a function that compares two strings regardless of the case.
            if(alphabet[i].localeCompare(text[j], undefined,{sensitivity: 'accent'}) === 0) {
                localCount++
            }
        }
            if(localCount !== 0){
                principalCount.push(alphabet[i]+":"+localCount+" ")
                localCount = 0
            }
    }
    if(principalCount.length === 0){
        return "no Matches"
    } else 
        return principalCount

};

//////////////////////////////////////////
// Works with strings !
/////////////////////////////////////////

    const alphaCount = (alphabet, text) => {
        var localCount=0
        var principalCount=[]
        var alphabetModified=""
        for(var x=0;x<alphabet.length;x++){
            if(alphabet[x] === alphabet[x].toUpperCase()){
                alphabetModified = alphabetModified + alphabet[x].toLowerCase()
            }
            alphabetModified = alphabetModified + alphabet[x]
        }

        for(var i=0; i<alphabetModified.length;i++){
            for(var j=0; j<text.length;j++){
        // localeCompare() it's a function that compares two strings regardless of the case.
                if(alphabetModified[i]  === text[j]) {
                    localCount++
                }
            }
                if(localCount !== 0){
                    principalCount = principalCount + (alphabetModified[i]+":"+localCount+" ")
                    localCount = 0
                }
        }
        if(principalCount.length === 0){
            return "no Matches"
        } else 
            return principalCount

    };
