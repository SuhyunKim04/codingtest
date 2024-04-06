function solution(my_string) {
    return [...my_string].map((b) => b === b.toUpperCase() ? b.toLowerCase() : b.toUpperCase()).join('');
}

1.
function solution(my_string) {
    var answer = '';
    for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
    return answer;
}

let arr = [ 'a','b','c','D','E'];
let my_string = 'aAbBcC'
let result = ''
let arrResult = []
for(let i =0; i < arr.length ; i++) {
    console.log(arr)
}
arr.forEach( data => { 
    let ch = data.toUpperCase();
    let newCh = data === ch ? data.toLowerCase() : data.toUpperCase()
    result += newCh;
    arrResult.push(newCh);
})

console.log('result:', result);
console.log('arrResult :',  arrResult.join(''))
for(let data of arr) {
    console.log(data)
}

for(let data of my_string) {
    console.log(data)
}