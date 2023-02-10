function possibilities(str) {
    function str_prog(str){
        if ( /\?/.test(str) ) {
            return str_prog(str.replace(/\?/,'0')) + str_prog(str.replace(/\?/,'1'))
        } else return str;
    }
    return str_prog(str+' ').slice(0,-1).split(' ');
};

console.log(possibilities('1?1?'));