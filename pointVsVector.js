function pointVsVector( point, vector ){

    let ax = vector[0][0];
    let ay = vector[0][1];

    let bx = vector[1][0];
    let by = vector[1][1];

    let px = point[0];
    let py = point[1];

    let result = (bx-ax)*(py-ay)-(by-ay)*(px-ax);
    
    if (result == 0) return 0;
    if (result > 0) return -1;
    if (result < 0) return 1;
}
const vector = [[0, 0], [1, 1]];


console.log(pointVsVector([2,2],vector));