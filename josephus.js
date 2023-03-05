function josephus(array,k){
    //generete next id of array (after k items)
    let gen = function*(){
        let count = 1;
        while (true) {
            count += k-1;
            while (count > array.length) count -= array.length;
            yield count-1;
        }
    }(); 
    let result = [];
    let current;
    while(array.length > 0) {
        current = gen.next().value; //get next id
        result.push(array[current]); //add to result 'current item'
        array.splice(current,1); //remove from array 'current item'
    }
    return result;
}

console.log('end',josephus([1,2,3,4,5,6,7,8,9,10],2));
console.log([2, 4, 6, 8, 10, 3, 7, 1, 9, 5])
