const maxMirror = (arr) => {
    let arr_rev = [].concat(...arr).reverse();
    let result = 0;
    let cur = 0;
    while(arr.length > 1){
        cur = 0;
        for (let i = 0; i < arr_rev.length; i++) {
            if (arr[0+cur] != arr_rev[i]) cur = 0;
            if (arr[0+cur] == arr_rev[i]) {
                cur++;
                if (result < cur) {
                    result = cur;
                    console.log(result);
                }
            } else cur = 0;
        }
        arr.shift();
    }
    return (result > 1) ? result : 0;
}


console.log(maxMirror([1, 2, 3, 8, 9, 3, 2, 1, 9, 8]));