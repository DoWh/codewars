function kaCokadekaMe(word) {
    let result = 'ka';
    let vowel = ['a','e','i','o','u','A','E','I','O','U'];
    for (let i = 0; i < word.length; i++) {
        result += word[i];
        if ( vowel.includes(word[i+1]) || i == word.length-1 ) continue;
        if ( vowel.includes(word[i]) ) result += 'ka';
    }
    return result;
}

console.log(kaCokadekaMe("Incomprehensibilities"))
console.log('kaIkancokamprekahekansikabikalikatiekas')