function longestConsec(strarr, k) {
    if ((k < 0)) return '';
    if ((k > strarr.length)) return '';
    if ((k == 0)) return '';
    return strarr
            .map( (a,index)=> {
                for (let i = 1; i < k; i++) {
                    if (strarr[index+i] != undefined) a += strarr[index+i]
                }
                return a;
            })
            .sort( (a,b) => b.length - a.length)
            .slice(0,1)
            .join('')
}


console.log(longestConsec([ 'zone', 'abigail', 'theta', 'form', 'libe', 'zas' ], 10));

console.log('abigailtheta');