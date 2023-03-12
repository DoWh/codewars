//https://www.codewars.com/kata/63fb421be6be1f57ad81809e
function woofDecoder(str) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    str = str.toLowerCase()
             .replace(/[^wof!-]/g, '') //remove garbage
             .split('!') //get sequence
             .filter(value => value.length > 3) //remove wrong words
    if (str.length == 0) return "nothing to decode!"

    str = str.map(value => value.split('-')) //split sequence
             .map(value => alphabet[value.length-1]) //get letters
    
    if (str.includes(undefined)) return "just barking!" //if latter out of array
    else return str.join('')
}

let str = "Woof! Woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof!";
console.log(woofDecoder(str));
