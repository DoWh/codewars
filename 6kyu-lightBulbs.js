//https://www.codewars.com/kata/5901555b63bf404a66000029
function lightBulbs(lights, n) {
    let last;
    for (let i = 0; i < n; i++) {
        last = lights[lights.length-1]
        for (let j = 0; j < lights.length; j++) {
            if (last == 1) {
                last = lights[j];
                lights[j] == 0 ? lights[j] = 1 : lights[j] = 0
            } else last = lights[j];
        }
    }
    return lights    
}

console.log('start ',[0, 1, 1, 0, 1, 1])
console.log('end   ',lightBulbs([0, 1, 1, 0, 1, 1], 2))
console.log('test1 ',[1, 1, 0, 1, 1, 0]);
console.log('test2 ',[1, 0, 1, 1, 0, 1]);