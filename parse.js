class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
function parse(string) {
    if (string == "null") return null;
    string = string.split(' -> ');
    let startNode = new Node(Number(string[0]));
    let link = startNode;
    startNode.next = null;
    for (let i = 1; i < string.length - 1; i++) {
        link.next = new Node(Number(string[i]));
        link = link.next;
        link.next = null;
    }
    return startNode;
}
let str = "null";

console.log(parse(str));