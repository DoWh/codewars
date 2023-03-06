// https://www.codewars.com/kata/520b9d2ad5c005041100000f
function pigIt(str){
    return str.split(' ').map( value => {
        if (/[!,\?]/.test(value)) return value
        else return value.slice(1) + value[0] + 'ay'
    }).join(' ')
}

console.log('end',pigIt('Hello world !'));
console.log('elloHay orldway !');