function solve(s){
    if (s.length % 2 != 0) return -1;
    s = s.replace(/\(/g,'0');
    s = s.replace(/\)/g,'1');
    function clearString(str) {
        let regex = /01/g;
        while (regex.test(str)) {
            str = str.replace(regex, '');
        }
        return str;
    }
    s = clearString(s);
    let result = 0;
    while (s.length > 1) {
        if (s[0] === '1') {
            result++;
            s = '0' + s.slice(1);
        }
        if (s[s.length-1] === '0') {
            result++;
            s = s.slice(0,-1) + '1';
        }
        s = clearString(s);
    }
    return result;
}
s = '))))))';

console.log(solve(s));
