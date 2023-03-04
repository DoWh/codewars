function numberOfPairs(gloves){ 
    const map = new Map();
    let result = 0;
    for (let i = 0; i < gloves.length; i++) map.set(gloves[i],0)
    for (let i = 0; i < gloves.length; i++) map.set(gloves[i],map.get(gloves[i])+1)
    for (let amount of map.values()) result += Math.trunc(amount/2);
    return result;
}

let tests = ['gray','black','purple','purple','gray','black'];
numberOfPairs(tests);