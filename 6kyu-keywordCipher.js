// https://www.codewars.com/kata/57241cafef90082e270012d8/javascript
function keywordCipher(string, keyword) {
    const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const crypto = {};
    let result = '';

    //to Lower Case
    keyword = keyword.toLowerCase();
    string = string.toLowerCase();
    //delete duplicate
    keyword = new Set( keyword.split('') ); 
    //add to keyword all 'abc' (exept keyword alredy have)
    for (let i = 0; i < abc.length; i++) keyword.add(abc[i]) 
    //convert SET to Array
    keyword = Array.from(keyword); 
    //create crypto object which, by the name of the property, gives the encoding
    abc.map( (value,index) => crypto[value] = keyword[index] ) 
    // just decrypt use crypto object
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ' ') {
            result += ' ';
            continue;
        } else result += crypto[string[i]];
    }
    return result;
}

console.log(keywordCipher("Welcome home","secret"));
console.log('wticljt dljt');