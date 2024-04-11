function solution(box, n) {
    var answer = 0;
    return answer;
}


//내가푼애
function solution(box, n) {
    return parseInt(box[0]/n) * parseInt(box[1]/n) * parseInt (box[2]/n)
}

1.
function solution(box, n) {
    let [width, length, height] = box;

    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);

}