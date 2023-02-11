function VigenèreCipher(key, abc) {
    this.get_key_reset = function* (){
        while (true) {
            for (let i = 0; i < key.length; i++) yield key[i];
        }
    };
    this.encode = function (str) {
        let get_key = this.get_key_reset();
        console.log('encode = '+str);
        let result = '';
        let next_key,current_code;
        for (let letter in str){
            next_key = get_key.next().value;
            if (abc.indexOf(str[letter]) == -1) {
                result += str[letter];
                continue;
            }
            current_code = abc.indexOf(str[letter])+abc.indexOf(next_key);
            while (current_code >= abc.length) current_code -= abc.length;
            result += abc[current_code];
        }
        return result;
    };
    this.decode = function (str) {
        let get_key = this.get_key_reset();
        console.log('decode = '+str);
        let result = '';
        let next_key,current_code;
        for (let letter in str){
            next_key = get_key.next().value;
            if (abc.indexOf(str[letter]) == -1) {
                result += str[letter];
                continue;
            }
            current_code = abc.indexOf(str[letter])-abc.indexOf(next_key);
            while (current_code < 0) current_code += abc.length;
            result += abc[current_code];
        }
        return result;
    };
}

var abc, key;
abc = "abcdefghijklmnopqrstuvwxyz";
key = "password"
c = new VigenèreCipher(key, abc);

// console.log(c.encode('codewars'));
// console.log('rovwsoiv');
// console.log(c.decode('rovwsoiv'));
// console.log('codewars');

// console.log(c.encode('waffles'));
// console.log('laxxhsj');
// console.log(c.decode('laxxhsj'));
// console.log('waffles');

// console.log(c.encode('CODEWARS'));
// console.log('CODEWARS');
// console.log(c.decode('CODEWARS'));
// console.log('CODEWARS');

console.log(c.encode("it's a shift cipher!"));
console.log('xt\'k o vwixl qzswej!');
