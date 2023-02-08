function draw(waves){
    let max = Math.max(...waves);
    let result = Array(max).fill().map(() => Array(waves.length).fill('□'));
    result.forEach((element,index)=>{
        for(let i=0; i < element.length; i++){
            if (waves[i] >= max) result[index][i] = '■';
        }
        max -= 1;
    });
    return result.map(a => a.join('')).join('\n');
}

console.log(draw([1,2,3,5]))