function lookSay(number){
    number = String(number);
    let count = 1;
    let result = '';
    for (let i = 0; i < number.length; i++) {
        if ((i == number.length-1) || (number[i] != number[i+1])) {
            result += String(count) + number[i];
            count = 1;
        } else count++;
    }
    return Number(result);
}

console.log(lookSay(2014));
console.log('12101114');