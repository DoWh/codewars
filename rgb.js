function rgb(r, g, b){
    function get_color(color){
        let x16 = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
        if (color <= 0) return '00';
        if (color >= 256) return 'FF';
        return x16[Math.trunc(color/16)] + x16[color % 16];
    }
    return get_color(r) + get_color(g) + get_color(b);
}

console.log(rgb(0, 255, -20));