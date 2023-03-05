function power(array) {
    let result = [[]];
    let count;
    for (let i = 0; i < array.length; i++) {
        count = result.length;
        for (let j = 0; j < count; j++) {
            result.push(result[j].concat(array[i]));
        }
    }
    return result;
}

console.log('power',power([1,2,3,4])) 