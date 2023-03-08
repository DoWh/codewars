//https://www.codewars.com/kata/57f8ff867a28db569e000c4a
function kebabize(str) {
    console.log(str)
    return str
    //delete all exept a-z, A-Z
    .replace(/[^a-zA-Z]/g , '')
    //replace all A-Z to small and add '-'
    .replace(/[A-Z]/g, (match)=>{
        return '-' + match.toLowerCase();
    })
    //replace first '-', if word start with A-Z
    .replace(/^-/, '')
}

console.log(kebabize("-myCamelHas3Humps"))
