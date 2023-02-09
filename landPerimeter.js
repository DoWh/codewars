function landPerimeter(arr) {
    let result = 0;
    for(let i=0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == 'O') continue;
            if ( i==0               || arr[i-1][j] !== 'X') result++;
            if ( i==arr.length-1    || arr[i+1][j] !== 'X') result++;
            if ( j==0               || arr[i][j-1] !== 'X') result++;
            if ( j==arr[0].length-1 || arr[i][j+1] !== 'X') result++;
        }
    }
    return `Total land perimeter: ${result}`;
}


let arr = ["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]; //60
console.log(landPerimeter(arr));