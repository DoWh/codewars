function narcissistic(value) {
    value = String(value);
    let result = 0;
    for (let i = 0; i < value.length; i++) {
        result += Math.pow(Number(value[i]),value.length)
    }
    return result == value;
}

console.log(narcissistic( 371 ));
  