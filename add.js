function add(min, max) {
    if (min.length > max.length) [min,max] = [max,min]; //swap for minLength
    min = min.split('');
    max = max.split('');
    let up = 0;
    let current = 0;
    let result = "";
    for (let i = 1; i <= max.length; i++) {
        minItem = min[min.length-i];
        maxItem = max[max.length-i];
        if (minItem === undefined) minItem = 0;
        current = Number(minItem) + Number(maxItem) + up;
        if (current > 9) {
            result = (current % 10) + result;
            up = Math.trunc(current / 10);
        } else {
            result = current + result;
            up = 0;
        }
    }
    if (up != 0) result = up + result;
    return result;
}

console.log(add('9','9'));  