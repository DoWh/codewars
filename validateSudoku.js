function validateSudoku(board) {
    
    let set;
    for(let i=0; i < 9; i++){
        //chek row
        set = new Set(board[i]);
        if (set.has(0)) return false;
        if (set.size !== 9) return false;
        //chek column
        set = new Set();
        for (let j =0; j < 9; j++){
            set.add(board[j][i]);
        }
        if (set.has(0)) return false;
        if (set.size !== 9) return false;
    }
    //chek block...
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            set = new Set();
            set.add(board[0+i*3][0+j*3]);
            set.add(board[0+i*3][1+j*3]);
            set.add(board[0+i*3][2+j*3]);

            set.add(board[1+i*3][0+j*3]);
            set.add(board[1+i*3][1+j*3]);
            set.add(board[1+i*3][2+j*3]);

            set.add(board[2+i*3][0+j*3]);
            set.add(board[2+i*3][1+j*3]);
            set.add(board[2+i*3][2+j*3]);
            
            if (set.has(0)) return false;
            if (set.size !== 9) return false;
        }
    }
    return true;
}

let board = [[1,2,3,4,5,6,7,8,9],
[2,3,4,5,6,7,8,9,1],
[3,4,5,6,7,8,9,1,2],
[4,5,6,7,8,9,1,2,3],
[5,6,7,8,9,1,2,3,4],
[6,7,8,9,1,2,3,4,5],
[7,8,9,1,2,3,4,5,6],
[8,9,1,2,3,4,5,6,7],
[9,1,2,3,4,5,6,7,8]];

// let board = [[1,2,3],
//             [6,5,4],
//             [9,8,4]
// ];

console.log(validateSudoku(board));