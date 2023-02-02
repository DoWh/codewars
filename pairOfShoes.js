function pairOfShoes(shoes) {
    let pair = {
        left : new Map(),
        right : new Map()
    }
    pair.add = (side,size) => {
        let boot = pair.left;
        if (side === 1) boot = pair.right;
        if ( boot.has(size) ) boot.set( size, boot.get(size)+1 ) 
        else boot.set(size,1)
    }
    for (let item of shoes){
        pair.add(item[0],item[1]);
    }
    if (pair.left.size != pair.right.size) return false;
    for (let item of pair.left){
        if ( pair.right.get(item[0]) != item[1] ) return false;
    }
    return true;
}


let arr = [[0,23],[1,23],[1,23],[0,23],[0,23],[0,23]];
// let arr = [[0, 21], [1, 23], [1, 21], [0, 23]];

console.log(pairOfShoes(arr));
