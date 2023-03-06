// https://www.codewars.com/kata/5263c6999e0f40dee200059d
function getPINs(observed) {
    function Near(num){
        switch (num) {
            case '1': return ['1','2','4'];
            case '2': return ['2','1','3','5'];
            case '3': return ['3','2','6'];
            case '4': return ['4','1','5','7'];
            case '5': return ['5','2','4','6','8'];
            case '6': return ['6','3','5','9'];
            case '7': return ['7','4','8'];
            case '8': return ['8','5','7','9','0'];
            case '9': return ['9','6','8'];
            case '0': return ['0','8'];
        }
    }
    let temp,result = [];
    for (let i = 0; i < observed.length; i++) {
        temp = Near(observed[i]);
        if (result.length == 0) {
            result = temp;
            continue;
        }
        for (let j = 0; j < result.length; j++){
            result[j] = temp.map(value => result[j] + value)
        }
        result = result.flat();
    }
    return result;
}

console.log('end',getPINs('11'));
// console.log(["5", "7", "8", "9", "0"]);

