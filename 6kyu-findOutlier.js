//https://www.codewars.com/kata/5526fc09a1bbd946250002dc
function findOutlier(integers){
    // we have 4 type of array [0,0,0], [0,0,1] [1,1,1] [1,1,0] (all array items % 2)
    // so if 'type' > 2 then we need even number!
    let type = 0;
    for (let i = 0; i < 3; i++) type += Math.abs(integers[i]) % 2;

    for (let i = 0; i < integers.length; i++) {
        if (type < 2) {
            if (integers[i] % 2 != 0) return integers[i] 
        } else {
            if (integers[i] % 2 == 0) return integers[i]
        }           
    }
}

console.log('end',findOutlier([
    1, 1, -1, 1, 1, -44,
    7, 7,  7, 7, 7,   7,
    7, 7
])) // -44