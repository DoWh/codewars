function listPosition(word) {
    let abc = word
                .split('')
                .sort( (a,b)=>a.charCodeAt(0)-b.charCodeAt(0) )
                //.filter( (cur,index,arr)=>cur!=arr[index+1]);
    console.log(abc);
    console.log(word);
    let count = 1;

}
var testValues = {'A' : 1, 'ABAB' : 2, 'AAAB' : 1, 'BAAA' : 4, 'QUESTION' : 24572, 'BOOKKEEPER' : 10743};
console.log(listPosition('BOOKKEEPER'));
console.log('**********end**********');

aabb
abab
baba
bbaa
